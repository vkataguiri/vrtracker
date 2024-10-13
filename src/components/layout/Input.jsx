import React from 'react';

export const Input = ({ name, value, step, label, placeholder, type, onChange }) => {
	return (
		<div className="flex flex-col gap-0">
			<label htmlFor={name} className="text-[12px]">
				{label}
			</label>
			<input
				name={name}
				type={type}
				step={step}
				placeholder={placeholder}
				className="bg-back-main placeholder:opacity-50 text-fg-primary py-[12px] pl-[10px] rounded-[10px] border border-back-secondary min-w-[360px]"
				onChange={onChange}
				value={value}
				required
			/>
		</div>
	);
};
