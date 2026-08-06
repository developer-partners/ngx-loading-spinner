import { AfterContentInit, ContentChildren, Directive, ElementRef, HostListener, OnDestroy, QueryList } from "@angular/core";
import { Subscription } from "rxjs";
import { LoadingSpinnerComponent } from "./loading-spinner.component";

@Directive({
    selector: '[dp-spinner-parent],.dp-spinner-parent'
})
export class SpinnerParentDirective implements AfterContentInit, OnDestroy {
    private _spinners?: NodeListOf<HTMLElement>

    @ContentChildren(LoadingSpinnerComponent, { descendants: true })
    private _spinnerComponents!: QueryList<LoadingSpinnerComponent>;

    private _changesSub?: Subscription;

    constructor(private readonly _element: ElementRef<HTMLElement>) {

    }

    private adjustSpinnerLocations(): void {
        if (this._spinners) {
            this._spinners.forEach(spinner => {
                spinner.style.top = this._element.nativeElement.scrollTop + 'px';

                if (this._element.nativeElement.scrollTop > 0) {
                    spinner.style.bottom = (-this._element.nativeElement.scrollTop) + 'px';
                } else {
                    spinner.style.bottom = '0';
                }
            });
        }
    }

    public ngAfterContentInit(): void {
        this.refreshSpinners();
        this._changesSub = this._spinnerComponents.changes.subscribe(() => this.refreshSpinners());
    }

    public ngOnDestroy(): void {
        this._changesSub?.unsubscribe();
    }

    private refreshSpinners(): void {
        this._spinners = this._element.nativeElement.querySelectorAll('.dp-spinner-container');
        this.adjustSpinnerLocations();
    }

    @HostListener('scroll')
    public onScroll(): void {
        this.adjustSpinnerLocations();
    }
}