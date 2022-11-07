import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    styleUrls: [
        './default-spinner.component.scss'
    ],
    template: '<div class="lds-dual-ring"></div>',
    encapsulation: ViewEncapsulation.None
})
export class DefaultSpinnerComponent {

}