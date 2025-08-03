import React, { useState } from "react";

export interface IColumn {
	/** Column name */
	name: string;
	/** Column value */
	value: string;
	/** Is editable */
	isEditable?: boolean;
}

interface IColumnProps extends IColumn {
	/** Row id */
	rowId: string;
}

const Column: React.FC<IColumnProps> = ({
	name,
	value,
	isEditable = false,
	rowId,
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
					type="text"
					value={inputValue}
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
