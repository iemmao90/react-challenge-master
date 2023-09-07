// use this function to fetch the orders.
import { useEffect, useState } from 'react';
import { ApiOrder, getOrders } from '../../api/api';
import { Button } from '../Button/Button';
import './OrdersList.css';

export function OrdersList() {
  const [orders, setOrders] = useState<ApiOrder[]>([]);

  useEffect(() => {
    getOrders()
      .then((data: ApiOrder[]) => {
        setOrders(data);
      })
      .catch((err) => {
        console.log('Error when retrieving data', err);
      });
  }, []);

  return (
    <>
      <h1>Orders List</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <ul className="order-item" key={order.id}>
            <li>
              <span>Order number: </span>
              {order.id}
            </li>
            <li>
              <span>Date: </span>
              {order.created_at.split(':')[0]}
            </li>
            <li>
              <span> Name: </span>
              {order.first_name} {order.last_name}
            </li>
            <li>
              <span>Quantity: </span>
              {order.products.reduce(
                (total, product) => total + product.quantity,
                0
              )}
            </li>
            <li>
              <span>Total: </span>
              {order.products.reduce((orderTotal, product) => {
                return orderTotal + product.price * product.quantity;
              }, 0)}{' '}
              SEK
            </li>

            <Button
              onClick={() => alert(`Order number: ${order.id}`)}
              variant={order.status}
            >
              {order.status}
            </Button>
          </ul>
        ))}
      </div>
    </>
  );
}
