import { Component, Injector, Input, ViewEncapsulation } from "@angular/core";
import { LoadingSpinnerConfig } from "./loading-spinner.config";

@Component({
    selector: 'dp-loading-spinner',
    templateUrl: './loading-spinner.component.html',
    styleUrls: [
        './loading-spinner.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class LoadingSpinnerComponent {
    @Input()
    public message?: string;

    public get component() {
        return this._spinnerConfig.component;
    }

    constructor(
        private readonly _spinnerConfig: LoadingSpinnerConfig,
        public readonly injector: Injector
    ) {

    }
}