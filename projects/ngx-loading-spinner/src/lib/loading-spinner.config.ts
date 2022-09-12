import { Injectable, Type } from "@angular/core";
import { DefaultSpinnerComponent } from "./default-spinner.component";

@Injectable({
    providedIn: 'root'
})
export class LoadingSpinnerConfig {
    public component: Type<any> = DefaultSpinnerComponent
}