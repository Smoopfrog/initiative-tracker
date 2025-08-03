import React, { useState } from "react";
import type { IColumnProps } from "./Column";

interface IDefaultColumnProps extends IColumnProps {
	value: string | number | null;
}

const DefaultColumn: React.FC<IDefaultColumnProps> = ({
	rowId,
	name,
	value,
	isEditable = false,
}) => {
	const [inputValue, setInputValue] = useState(value);

	const handleChange = (value: string | number | null) => {
		setInputValue(value);
	};

	return isEditable ? (
		<input
			id={`${rowId}-${name}`}
			type="text"
			value={inputValue || undefined}
			className="column-input"
			onChange={(e) => handleChange(e.target.value)}
		/>
	) : (
		<span className="column-value">{value}</span>
	);
};

export default DefaultColumn;
