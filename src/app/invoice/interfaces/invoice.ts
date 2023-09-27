export interface Invoice {
  invoice_number: string;
  invoice_date: string;
  due_date: string;
  seller: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  buyer: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  items: {
    item: string;
    quantity: number;
    unitPrice: number;
    amount: number;
  }[];
}
