import { useState } from "react";
import type { IColumnProps } from "./Column";

interface IDefaultColumnProps<T extends { id: string }>
	extends IColumnProps<T> {
	value: string | number | null;
}

const DefaultColumn = <T extends { id: string }>({
	rowId,
	name,
	value,
	isEditable = false,
	setData,
	style,
}: IDefaultColumnProps<T>) => {
	const [inputValue, setInputValue] = useState(value);

	const handleChange = (value: string | number | null) => {
		setData((prev) =>
			prev.map((data) =>
				data.id === rowId ? { ...data, [name]: value } : data
			)
		);
	};

	const inputType = typeof value === "number" ? "number" : "text";

	return isEditable ? (
		<input
			id={`${rowId}-${name}`}
			type={inputType}
			value={inputValue || undefined}
			className="column-input"
			onChange={(e) => setInputValue(e.target.value)}
			onBlur={() => handleChange(inputValue)}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					e.currentTarget.blur();
				}
			}}
			style={style}
		/>
	) : (
		<span className="column-value" style={style}>
			{value}
		</span>
	);
};

export default DefaultColumn;
