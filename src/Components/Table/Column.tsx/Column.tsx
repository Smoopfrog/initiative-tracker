import React from "react";
import DefaultColumn from "./DefaultColumn";

export interface IColumn {
	/** Column name */
	name: string;
	/** Column header name */
	headerName: string;
	/** Is editable */
	isEditable?: boolean;
	/** Column value */
	value: string | number | string[] | number[] | null;
	/** Custom column renderer component */
	columnRenderer?: React.ComponentType<IColumnProps>;
}

export interface IColumnProps extends IColumn {
	/** Row id */
	rowId: string;
}

const Column: React.FC<IColumnProps> = ({
	value,
	columnRenderer,
	...props
}) => {
	// If a custom renderer is provided, use it
	if (columnRenderer) {
		const CustomRenderer = columnRenderer;

		return <CustomRenderer {...props} value={value} />;
	}

	if (Array.isArray(value)) {
		return <div className="column-container">-</div>;
	}

	return <DefaultColumn {...props} value={value} />;
};

export default Column;
