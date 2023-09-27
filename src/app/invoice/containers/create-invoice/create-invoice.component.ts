import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invoice } from '../../interfaces/invoice';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css'],
})
export class CreateInvoiceComponent {
  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService
  ) {}

  generateInvoiceForm = this.fb.group({
    invoiceNumber: ['', Validators.required],
    invoiceDate: [
      '',
      [
        Validators.required,
        Validators.pattern(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/),
      ],
    ],
    invoiceDueDate: [
      '',
      [
        Validators.required,
        Validators.pattern(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/),
      ],
    ],
    seller: this.fb.group({
      sellerName: ['', Validators.required],
      sellerAddress: ['', Validators.required],
      sellerPhone: ['', [Validators.required, Validators.min(10)]],
      sellerEmail: ['', [Validators.required, Validators.email]],
    }),
    buyer: this.fb.group({
      buyerName: ['', Validators.required],
      buyerAddress: ['', Validators.required],
      buyerPhone: ['', [Validators.required, Validators.min(10)]],
      buyerEmail: ['', [Validators.required, Validators.email]],
    }),
    items: this.fb.array([]),
  });

  get items(): FormArray {
    return this.generateInvoiceForm.get('items') as FormArray;
  }

  addItem(): void {
    const itemFormGroup = this.fb.group({
      item: [''],
      quantity: [''],
      unitPrice: [''],
      amount: [''],
    });
    this.items.push(itemFormGroup);
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  submitInvoice(): void {
    if (this.generateInvoiceForm.valid) {
      const invoiceData = this.generateInvoiceForm.value as Invoice;
      this.invoiceService.addInvoice(invoiceData);
      this.generateInvoiceForm.reset();
      this.items.clear();
    } else {
      this.generateInvoiceForm.markAllAsTouched();
    }
  }
}
