import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './containers/invoice/invoice.component';
import { CreateInvoiceComponent } from './containers/create-invoice/create-invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  errorTailorImports,
  provideErrorTailorConfig,
} from '@ngneat/error-tailor';

@NgModule({
  declarations: [InvoiceComponent, CreateInvoiceComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InvoiceComponent, CreateInvoiceComponent],
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
})
export class InvoiceModule {}
