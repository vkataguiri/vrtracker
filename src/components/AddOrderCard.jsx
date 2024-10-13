import { useState, useContext } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { OrderContext } from './context/OrderProvider';
import { Input } from './layout/Input';

export const AddOrderCard = () => {
	const { saveOrder } = useContext(OrderContext);

	const [formData, setFormData] = useState({
		id: '',
		restaurant: '',
		price: '',
		type: 'marmita',
		necessary: 'true', // shieeeeet it has to be like that otherwise it wont be validated on handleSUbmit[1]
		date: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newOrder = {
			...formData,
			id: uuidv4(),
			price: parseFloat(formData.price),
			necessary: formData.necessary === 'true', // [1]here
		};

		saveOrder(newOrder);

		setFormData({
			restaurant: '',
			price: '',
			type: 'marmita',
			necessary: 'true',
			date: '',
		});
	};

	return (
		<form className="flex flex-col gap-[25px] bg-back-primary p-[20px] rounded-2xl" onSubmit={handleSubmit}>
			<div className="flex flex-col">
				<h2 className="text-[24px]">Adicionar compra</h2>
				<p className="text-[12px] text-fg-secondary">Adicionar uma nova compra realizada.</p>
			</div>
			<div className="flex flex-col gap-[10px]">
				<Input
					name="restaurant"
					value={formData.restaurant}
					label="Nome do restaurante/mercado"
					type="text"
					placeholder="Don Zelittu's"
					onChange={handleInputChange}
				/>
				<Input
					name="price"
					value={formData.price}
					label="Valor da compra"
					type="number"
					step={0.01}
					placeholder="R$ 20,00"
					onChange={handleInputChange}
				/>
				<div className="flex flex-col gap-0">
					<label htmlFor="type" className="text-[12px]">
						Tipo de comida
					</label>
					<select
						name="type"
						id="type"
						className="bg-back-main px-[10px] py-[12px] rounded-[10px] border border-back-secondary"
						value={formData.type}
						onChange={handleInputChange}
						required
					>
						<option value="marmita">Marmita</option>
						<option value="fast-food">Fast-food</option>
					</select>
				</div>
				<div className="flex flex-col gap-0">
					<label htmlFor="necessary" className="text-[12px]">
						Essa compra foi necessária?
					</label>
					<select
						name="necessary"
						id="necessary"
						className="bg-back-main px-[10px] py-[12px] rounded-[10px] border border-back-secondary"
						value={formData.necessary}
						onChange={handleInputChange}
						required
					>
						<option value="true">Sim</option>
						<option value="false">Não</option>
					</select>
				</div>
				<Input name="date" value={formData.date} label="Data da compra" type="date" onChange={handleInputChange} />
			</div>
			<input
				type="submit"
				value="Salvar compra"
				className="bg-primary px-[10px] py-[12px] rounded-[10px] text-back-main hover:bg-[#128B3D] hover:text-fg-primary duration-150 cursor-pointer"
			/>
		</form>
	);
};
