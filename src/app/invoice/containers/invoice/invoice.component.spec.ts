import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { InvoiceComponent } from './invoice.component';
import { mockInvoiceData } from '../../mocks/mock-data';
import { of, throwError } from 'rxjs';
import { InvoiceService } from '../../services/invoice.service';

describe('InvoiceComponent', () => {
  let spectator: Spectator<InvoiceComponent>;
  let invoiceService: InvoiceService;
  const createComponent = createComponentFactory(InvoiceComponent);

  beforeEach(() => {
    spectator = createComponent();
    invoiceService = spectator.inject(InvoiceService);
  });

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should call ngonit and verify that fetchInvoice is called too', () => {
    spyOn(spectator.component, 'ngOnInit').and.callThrough();
    spectator.component.ngOnInit();
    expect(spectator.component.ngOnInit).toHaveBeenCalled();
    spyOn(spectator.component, 'fetchInvoice').and.callThrough();
    spectator.component.fetchInvoice();
    expect(spectator.component.fetchInvoice).toHaveBeenCalled();
  });

  it('should fetch invoice successfully', () => {
    spyOn(invoiceService, 'getInvoice').and.returnValue(of(mockInvoiceData));

    spectator.component.fetchInvoice();

    expect(spectator.component.invoice).toEqual(mockInvoiceData);
    expect(invoiceService.getInvoice).toHaveBeenCalled();
  });

  it('should handle error when fetching invoice', () => {
    const errorMessage = 'Error fetching invoice';
    spyOn(invoiceService, 'getInvoice').and.returnValue(
      throwError(() => errorMessage)
    );

    const consoleErrorSpy = spyOn(console, 'error');

    spectator.component.fetchInvoice();

    expect(spectator.component.invoice).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith(errorMessage);
  });

  it('should extract html content and generate pdf', async () => {
    spyOn(invoiceService, 'getInvoice').and.returnValue(of(mockInvoiceData));
    spectator.component.fetchInvoice();

    await spectator.fixture.whenStable();

    spectator.detectChanges();

    const htmlContent = spectator.component.extractHTMLContent();

    expect(htmlContent).toContain(
      '<h2 class="text-4xl font-semibold text-gray-800 mb-6">Invoice</h2>'
    );
    expect(htmlContent).toContain('<h6>Bill to:</h6>');

    const generatePDFButton = spectator.query('button') as HTMLElement;

    spyOn(spectator.component, 'generatePDF').and.callThrough();

    spectator.click(generatePDFButton);

    expect(spectator.component.generatePDF).toHaveBeenCalled();
  });
});
