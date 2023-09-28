import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './containers/invoice/invoice.component';
import { CreateInvoiceComponent } from './containers/create-invoice/create-invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { errorTailorImports } from '@ngneat/error-tailor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InvoiceComponent, CreateInvoiceComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    errorTailorImports,
  ],
  exports: [InvoiceComponent, CreateInvoiceComponent],
})
export class InvoiceModule {}
