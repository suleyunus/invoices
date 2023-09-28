import {
  Spectator,
  SpectatorElement,
  createComponentFactory,
} from '@ngneat/spectator';
import { CreateInvoiceComponent } from './create-invoice.component';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('CreateInvoiceComponent', () => {
  let spectator: Spectator<CreateInvoiceComponent>;
  const createComponent = createComponentFactory({
    component: CreateInvoiceComponent,
    imports: [ReactiveFormsModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should generate form', () => {
    const form = spectator.component.generateInvoiceForm;

    const sellerFormGroup = form.get('seller') as FormGroup;
    const buyerFormGroup = form.get('buyer') as FormGroup;
    const itemsFormArray = form.get('items') as FormArray;

    expect(sellerFormGroup).toBeTruthy();
    expect(buyerFormGroup).toBeTruthy();
    expect(itemsFormArray).toBeTruthy();

    expect(form.get('invoiceNumber')).toBeTruthy();
    expect(form.get('invoiceDate')).toBeTruthy();
    expect(form.get('invoiceDueDate')).toBeTruthy();
    expect(sellerFormGroup.get('sellerName')).toBeTruthy();
    expect(sellerFormGroup.get('sellerAddress')).toBeTruthy();
    expect(sellerFormGroup.get('sellerEmail')).toBeTruthy();
    expect(sellerFormGroup.get('sellerPhone')).toBeTruthy();
    expect(buyerFormGroup.get('buyerName')).toBeTruthy();
    expect(buyerFormGroup.get('buyerAddress')).toBeTruthy();
    expect(buyerFormGroup.get('buyerEmail')).toBeTruthy();
    expect(buyerFormGroup.get('buyerPhone')).toBeTruthy();
  });

  it('should add item form to dom when add item button is clicked', async () => {
    await spectator.fixture.whenStable();

    spectator.detectChanges();

    expect(spectator.query('.items-array')).not.toExist();

    spectator.click(spectator.query('.add-item') as SpectatorElement);

    expect(spectator.query('.items-array')).toExist();
  });

  it('should validate correct date input', async () => {});
});
