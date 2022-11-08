import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultSpinnerComponent } from './default-spinner.component';
import { LoadingSpinnerComponent } from './loading-spinner.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    DefaultSpinnerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoadingSpinnerComponent,
    DefaultSpinnerComponent
  ]
})
export class LoadingSpinnerModule { }
