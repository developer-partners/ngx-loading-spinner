# @developer-partners/ngx-loading-spinner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Basic Usage

1. Install the library

```
npm install @developer-partners/ngx-loading-spinner
```

2. Import in your module:

```
import { LoadingSpinnerModule } from '@developer-partners/ngx-loading-spinner';

@NgModule({
  imports: [
    LoadingSpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

3. Use it in HTML (isLoading should be a public booolean property in your component)

```
<dp-loading-spinner *ngIf="isLoading" message="Loading, please wait.."></dp-loading-spinner>
```

## Advanced Configuration

The loading spinner component comes with a default spinner. If you need to replace it with your own spinner, you can just replace our default provider

```
import { LoadingSpinnerModule } from '@developer-partners/ngx-loading-spinner';

@NgModule({
  imports: [
    LoadingSpinnerModule
  ],
  providers: [
    {
      provide: LoadingSpinnerConfig,
      useFactory: () => {
        return {
          component: YourCustomSpinnerComponent
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

The YourCustomSpinnerComponent in the example above should contain the custom HTML and CSS for your own loading spinner.

---
## Credits
Developer Partners, Inc.

[https://developerpartners.com](https://developerpartners.com)

## License
[Apache License 2.0](https://github.com/developer-partners/ngx-loading-spinner/blob/main/LICENSE.md)