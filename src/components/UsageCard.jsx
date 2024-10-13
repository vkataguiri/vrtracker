import { useContext } from 'react';
import { OrderContext } from './context/OrderProvider';
import { Order } from './layout/Order';

export const UsageCard = () => {
	const { totalUsed, orders } = useContext(OrderContext);
	const limit = 400;
	const percentage = (totalUsed / limit) * 100;

	return (
		<div className="flex flex-col gap-[25px] bg-back-primary p-[20px] rounded-2xl min-w-[400px] duration-500">
			<div className="flex flex-col">
				<h2 className="text-[24px]">Uso do cartão</h2>
				<p className="text-[12px] text-fg-secondary">O cartão reinicia todo dia 30.</p>
			</div>

			{/* Barra de porcentagem */}
			<div className="w-full h-6 bg-back-main rounded-full">
				<div
					className="h-full flex items-center justify-center bg-tags-essential rounded-full text-[12px] duration-500"
					style={{ width: `${percentage <= 100 ? percentage : 100}%` }}
				>
					{percentage < 30 ? (
						percentage > 10 && <p>{percentage.toFixed(1)}%</p>
					) : (
						<p>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalUsed)} /{' '}
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(limit)}
						</p>
					)}
				</div>
			</div>

			<div className="flex flex-col gap-[8px] select-none">
				<h3 className="text-[16px]">Últimas compras</h3>
				{[...orders].reverse().map((order, index) => (
					<Order order={order} key={index} />
				))}
			</div>
		</div>
	);
};
