import React, { createContext, useContext, useState } from 'react';

type Order = { id: string; items: string[]; status: 'Received' };

type OrderContextType = {
  orders: Order[];
  placeOrder: (items: string[]) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState<Order[]>([]);

  const placeOrder = (items: string[]) => {
    const newOrder: Order = { id: Date.now().toString(), items, status: 'Received' };
    setOrders([...orders, newOrder]);
  };

  return <OrderContext.Provider value={{ orders, placeOrder }}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder must be used within OrderProvider');
  return context;
}
