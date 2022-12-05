import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[dp-spinner-parent],.dp-spinner-parent'
})
export class SpinnerParentDirective implements AfterViewInit {
    private _spinners?: NodeListOf<HTMLElement>

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
        this._spinners = this._element.nativeElement.querySelectorAll('.dp-spinner-container');
        this.adjustSpinnerLocations();
    }

    @HostListener('scroll')
    public onScroll(): void {
        this.adjustSpinnerLocations();
    }
}