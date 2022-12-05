import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultSpinnerComponent } from './default-spinner.component';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { SpinnerParentDirective } from './spinner-parent.directive';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    DefaultSpinnerComponent,
    SpinnerParentDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    LoadingSpinnerComponent,
    DefaultSpinnerComponent,
    SpinnerParentDirective
  ]
})
export class LoadingSpinnerModule { }
