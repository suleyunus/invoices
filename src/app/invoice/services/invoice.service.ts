import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoiceData!: Invoice;

  constructor() {}

  addInvoice(invoiceData: Invoice) {
    this.invoiceData = invoiceData;
    console.log('Invoice generated', this.invoiceData);
  }
}
