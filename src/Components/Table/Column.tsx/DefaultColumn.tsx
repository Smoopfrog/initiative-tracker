import React from "react";
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
}: IDefaultColumnProps<T>) => {
	const handleChange = (value: string | number | null) => {
		setData((prev) =>
			prev.map((data) =>
				data.id === rowId ? { ...data, [name]: value } : data
			)
		);
	};

	return isEditable ? (
		<input
			id={`${rowId}-${name}`}
			type="text"
			value={value || undefined}
			className="column-input"
			onChange={(e) => handleChange(e.target.value)}
		/>
	) : (
		<span className="column-value">{value}</span>
	);
};

export default DefaultColumn;
