import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../interfaces/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice | undefined;
  subtotal: number | undefined;
  total: number | undefined;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.fetchInvoice();
  }

  fetchInvoice(): void {
    this.invoiceService.getInvoice().subscribe(
      (invoice: Invoice | undefined) => {
        this.invoice = invoice;
      },
      (error: any) => {
        console.error('Error fetching invoice', error);
      }
    );
  }

  calculateSubtotal(): void {
    if (this.invoice) {
      this.subtotal = this.invoiceService.calculateSubtotal();
    }
  }

  calculateTotal(): void {
    if (this.invoice) {
      this.total = this.invoiceService.calculateTotal();
    }
  }
}
