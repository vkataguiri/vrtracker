import { createContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
	const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);
	const [totalUsed, setTotalUsed] = useState(0);

	useEffect(() => {
		let total = 0;
		orders.map((order) => {
			total += order.price;
		});
		setTotalUsed(total);
		localStorage.setItem('orders', JSON.stringify(orders));
	}, [orders]);

	const saveOrder = (order) => {
		setOrders((prev) => [...prev, order]);
	};

	const deleteOrder = (id) => {
		const newOrders = orders.filter((order) => order.id !== id);
		setOrders(newOrders);
		localStorage.removeItem(id);
	};

	return (
		<OrderContext.Provider value={{ orders, totalUsed, saveOrder, deleteOrder }}>{children}</OrderContext.Provider>
	);
};
