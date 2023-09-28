import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { InvoiceService } from './invoice.service';
import { mockInvoiceData } from '../mocks/mock-data';

describe('InvoiceService', () => {
  let spectator: SpectatorService<InvoiceService>;
  const createService = createServiceFactory(InvoiceService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should add invoice and calculate the total correctly', () => {
    spectator.service.addInvoice(mockInvoiceData);
    spectator.service.getInvoice().subscribe((data) => {
      expect(data).toEqual(mockInvoiceData);
      expect(data?.subTotal).toEqual(15000);
      expect(data?.total).toEqual(14920);
    });
  });
});
