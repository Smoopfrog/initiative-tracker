import React, { type Dispatch } from "react";
import DefaultColumn from "./DefaultColumn";

export interface IColumn<T extends { id: string }> {
	data: T | null;
	/** Column name */
	name: string;
	/** Column header name */
	headerName: string;
	/** Is editable */
	isEditable?: boolean;
	/** Column value */
	value: string | number | string[] | number[] | null;
	/** Custom column renderer component */
	columnRenderer?: React.ComponentType<IColumnProps<T>>;
	/** Column style */
	style?: React.CSSProperties;
}

export interface IColumnProps<T extends { id: string }> extends IColumn<T> {
	/** Row id */
	rowId: string;
	/** Set rows */
	setData: Dispatch<React.SetStateAction<T[]>>;
}

const Column = <T extends { id: string }>({
	value,
	columnRenderer,
	...props
}: IColumnProps<T>) => {
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
