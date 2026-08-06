import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy } from "@angular/core";

@Directive({
    selector: '[dp-spinner-parent],.dp-spinner-parent'
})
export class SpinnerParentDirective implements AfterViewInit, OnDestroy {
    private _spinners?: NodeListOf<HTMLElement>
    private _observer?: MutationObserver;

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

    public ngAfterViewInit(): void {
        this.refreshSpinners();

        this._observer = new MutationObserver(() => this.refreshSpinners());
        this._observer.observe(this._element.nativeElement, { childList: true, subtree: true });
    }

    public ngOnDestroy(): void {
        this._observer?.disconnect();
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