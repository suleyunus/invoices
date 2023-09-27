import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceModule } from './invoice/invoice.module';
import {
  errorTailorImports,
  provideErrorTailorConfig,
} from '@ngneat/error-tailor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, InvoiceModule],
  providers: [
    provideErrorTailorConfig({
      errors: {
        useFactory() {
          return {
            required: 'This field is required',
            minlength: ({ requiredLength, actualLength }) =>
              `Expect ${requiredLength} but got ${actualLength}`,
            invalidAddress: (error) => `Address not valid`,
          };
        },
        deps: [],
      },
      controlCustomClass: [
        'dark:border-red-500',
        'border-red-600',
        'dark:focus:border-red-500',
        'focus:border-red-600',
      ],
      controlErrorsClass: ['text-red-600', 'dark:text-red-400'],
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
