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

export const mockInvoiceData: Invoice = {
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
