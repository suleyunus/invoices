import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './containers/invoice/invoice.component';
import { CreateInvoiceComponent } from './containers/create-invoice/create-invoice.component';

@NgModule({
  declarations: [InvoiceComponent, CreateInvoiceComponent],
  imports: [CommonModule],
  exports: [InvoiceComponent, CreateInvoiceComponent],
})
export class InvoiceModule {}
