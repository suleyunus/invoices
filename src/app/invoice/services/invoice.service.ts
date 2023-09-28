import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoiceData!: Invoice;

  addInvoice(invoiceData: Invoice) {
    this.invoiceData = invoiceData;
    this.invoiceData.subTotal = this.calculateSubtotal();
    this.invoiceData.total = this.calculateTotal();
    console.log('Invoice generated', this.invoiceData);
  }

  getInvoice(): Observable<Invoice | undefined> {
    return of(this.invoiceData);
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    for (const item of this.invoiceData.items) {
      const amount = item.quantity * item.unitPrice;
      item.amount = amount;
      subtotal += item.quantity * item.unitPrice;
    }
    return subtotal;
  }

  calculateTotal(): number {
    const subtotal = this.invoiceData.subTotal;
    let total = subtotal;

    if (this.invoiceData.taxRate) {
      const taxAmount = total * (this.invoiceData.taxRate / 100);
      total += taxAmount;
    }

    if (this.invoiceData.discountRate) {
      const discountAmount = total * (this.invoiceData.discountRate / 100);
      total -= discountAmount;
    }

    if (this.invoiceData.fees) {
      total += this.invoiceData.fees;
    }

    return total;
  }
}
