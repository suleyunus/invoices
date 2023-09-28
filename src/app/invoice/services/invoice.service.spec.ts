import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { InvoiceService } from './invoice.service';
import {
  randEmail,
  randFullName,
  randFutureDate,
  randPhoneNumber,
  randRecentDate,
  randStreetAddress,
  randUuid,
} from '@ngneat/falso';
import { Invoice } from '../interfaces/invoice';

const invoiceData: Invoice = {
  invoiceNumber: randUuid(),
  invoiceDate: randRecentDate().toISOString(),
  invoiceDueDate: randFutureDate().toISOString(),
  seller: {
    sellerName: randFullName(),
    sellerAddress: randStreetAddress(),
    sellerEmail: randEmail(),
    sellerPhone: randPhoneNumber(),
  },
  buyer: {
    buyerName: randFullName(),
    buyerAddress: randStreetAddress(),
    buyerEmail: randEmail(),
    buyerPhone: randPhoneNumber(),
  },
  taxRate: 16,
  discountRate: 20,
  fees: 1000,
  items: [
    { item: 'shoes', quantity: 5, unitPrice: 1000, amount: 0 },
    { item: 'bags', quantity: 10, unitPrice: 500, amount: 0 },
    { item: 'belts', quantity: 15, unitPrice: 200, amount: 0 },
    { item: 'jeans', quantity: 2, unitPrice: 1000, amount: 0 },
  ],
  subTotal: 0,
  total: 0,
};

describe('AuthService', () => {
  let spectator: SpectatorService<InvoiceService>;
  const createService = createServiceFactory(InvoiceService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should add invoice and calculate the total correctly', () => {
    spectator.service.addInvoice(invoiceData);
    spectator.service.getInvoice().subscribe((data) => {
      expect(data).toEqual(invoiceData);
      expect(data?.subTotal).toEqual(15000);
      expect(data?.total).toEqual(14920);
    });
  });
});
