import React from "react";

export interface IColumn {
	/** Column name */
	name: string;
	/** Column value */
	value: string;
	/** Is editable */
	isEditable?: boolean;
}

const Column: React.FC<IColumn> = ({ value, isEditable = false }) => {
	return <div>{isEditable ? <input type="text" value={value} /> : value}</div>;
};

export default Column;
