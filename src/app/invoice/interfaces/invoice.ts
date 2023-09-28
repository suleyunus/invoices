export interface Invoice {
  invoiceNumber: string;
  invoiceDate: string;
  invoiceDueDate: string;
  seller: {
    sellerName: string;
    sellerAddress: string;
    sellerEmail: string;
    sellerPhone: string;
  };
  buyer: {
    buyerName: string;
    buyerAddress: string;
    buyerEmail: string;
    buyerPhone: string;
  };
  items: {
    item: string;
    quantity: number;
    unitPrice: number;
    amount: number;
  }[];
  taxRate: number;
  discountRate: number;
  fees: number;
  subTotal: number;
  total: number;
}
