import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingSpinnerConfig, LoadingSpinnerModule } from 'projects/ngx-loading-spinner/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverrideSpinnerComponent } from './override-spinner/override-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    OverrideSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingSpinnerModule
  ],
  providers: [
    {
      provide: LoadingSpinnerConfig,
      useFactory: () => {
        return {
          component: OverrideSpinnerComponent
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

