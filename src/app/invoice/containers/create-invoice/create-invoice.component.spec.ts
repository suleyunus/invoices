import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreateInvoiceComponent } from './create-invoice.component';
import { InvoiceService } from '../../services/invoice.service';

describe('CreateInvoiceComponent', () => {
  let component: CreateInvoiceComponent;
  let fixture: ComponentFixture<CreateInvoiceComponent>;
  let invoiceService: InvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [CreateInvoiceComponent],
      providers: [InvoiceService, FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvoiceComponent);
    component = fixture.componentInstance;
    invoiceService = TestBed.inject(InvoiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the generateInvoiceForm correctly', () => {
    expect(component.generateInvoiceForm.get('invoiceNumber')).toBeTruthy();
    expect(component.generateInvoiceForm.get('invoiceDate')).toBeTruthy();
    expect(component.generateInvoiceForm.get('invoiceDueDate')).toBeTruthy();
    expect(component.generateInvoiceForm.get('seller')).toBeTruthy();
    expect(component.generateInvoiceForm.get('buyer')).toBeTruthy();
    expect(component.generateInvoiceForm.get('items')).toBeTruthy();
    expect(component.generateInvoiceForm.get('extraCharges')).toBeTruthy();
  });

  it('should add an item to the items FormArray', () => {
    component.addItem();
    expect(component.items.length).toBe(1);
  });

  it('should remove an item from the items FormArray', () => {
    component.addItem();
    component.removeItem(0);
    expect(component.items.length).toBe(0);
  });
});
