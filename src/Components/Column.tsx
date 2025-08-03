import React, { useState } from "react";

export interface IColumn {
	/** Column name */
	name: string;
	/** Column header name */
	headerName: string;
	/** Is editable */
	isEditable?: boolean;
	/** Column type */
	type?: "text" | "number";
	/** Column value */
	value: string | number | null;
}

interface IColumnProps extends IColumn {
	/** Row id */
	rowId: string;
}

const Column: React.FC<IColumnProps> = ({
	rowId,
	name,
	value,
	type,
	isEditable = false,
}) => {
	const [inputValue, setInputValue] = useState(value);

	const handleChange = (value: string) => {
		setInputValue(value);
	};

	return (
		<div className="column-container">
			{isEditable ? (
				<input
					id={`${rowId}-${name}`}
					type={type}
					value={inputValue || undefined}
					className="column-input"
					onChange={(e) => handleChange(e.target.value)}
				/>
			) : (
				<span className="column-value">{value}</span>
			)}
		</div>
	);
};

export default Column;
