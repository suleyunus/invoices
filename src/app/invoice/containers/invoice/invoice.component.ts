import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../interfaces/invoice';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { HttpClient } from '@angular/common/http';
import htmlToPdfmake from 'html-to-pdfmake';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styles: [],
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice | undefined;
  subtotal: number | undefined;
  total: number | undefined;

  constructor(
    private invoiceService: InvoiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchInvoice();
  }

  fetchInvoice(): void {
    this.invoiceService.getInvoice().subscribe({
      next: (invoice: Invoice | undefined) => {
        this.invoice = invoice;
      },
      error(err) {
        console.error('Error fetching invoice', err);
      },
    });
  }

  extractHTMLContent(): string {
    const htmlElement = document.getElementById('invoice');
    const htmlContent = htmlElement?.innerHTML ?? '';
    return htmlContent;
  }

  generatePDF(): void {
    const htmlContent = this.extractHTMLContent();
    const val = htmlToPdfmake(htmlContent);
    const documentDefinition = { content: val };

    pdfMake.createPdf(documentDefinition).open();
  }
}
