export type ApiOrderStatus = 'pending' | 'cancelled' | 'shipped' | 'paid';

export interface ApiOrder {
  id: number;
  status: ApiOrderStatus;
  products: ApiOrderItem[];
  created_at: string;
  first_name: string;
  last_name: string;
  price: {
    total: number;
    currency: 'EUR' | 'SEK' | 'USD';
  };
  customer: ApiCustomer;
}

export interface ApiOrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface ApiCustomer {
  name: string;
  email: string;
  address: string;
}

export async function getOrders() {
  const res = await fetch('/api/orders');
  return await res.json();
}
