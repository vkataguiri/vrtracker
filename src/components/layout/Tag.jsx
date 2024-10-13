export const Tag = ({ color, name }) => {
	return (
		<p className="px-[10px] py-[2px] rounded-full text-[12px] m-auto" style={{ backgroundColor: color }}>
			{name}
		</p>
	);
};
