import { useEffect, useState, useContext } from 'react';

import { FaRegTrashAlt } from 'react-icons/fa';

import { OrderContext } from '../context/OrderProvider';
import { Tag } from './Tag';

export const Order = ({ order }) => {
	const { deleteOrder } = useContext(OrderContext);
	const [tags, setTags] = useState([
		{
			name: 'marmita',
			color: '#4732C0',
		},
		{
			name: 'fast-food',
			color: '#828610',
		},
	]);

	const defaultColors = ['#129E44', '#9E2424', '#4732C0', '#828610'];

	useEffect(() => {
		const tag = tags.filter((tag) => tag.name === order.type);
		setTags(tag);
	}, []);

	return (
		<div className="flex justify-between bg-back-secondary p-[10px] min-w-[420px] items-center rounded-[8px] text-[14px]">
			<div className="flex justify-left gap-[10px]">
				{order.necessary ? <p>🤌</p> : <p>🖕</p>}
				<p>{order.restaurant}</p>
				{order.necessary ? (
					<Tag name="essencial" color={defaultColors[0]} />
				) : (
					<Tag name="desnecessaria" color={defaultColors[1]} />
				)}
				{order.type == 'marmita' ? (
					<Tag name="marmita" color={defaultColors[2]} />
				) : (
					<Tag name="fast-food" color={defaultColors[3]} />
				)}
			</div>
			<div className="flex gap-[10px] items-center text-fg-secondary">
				<p className="text-[14px]">
					{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.price)}
				</p>
				<FaRegTrashAlt
					className="hover:text-fg-primary cursor-pointer duration-150"
					onClick={() => deleteOrder(order.id)}
				/>
			</div>
		</div>
	);
};
