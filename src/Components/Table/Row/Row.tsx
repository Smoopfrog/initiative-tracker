import React from "react";
import Column, { type IColumn } from "../Column.tsx/Column";

export interface IRow {
	/** Row id */
	rowId: string;
	/** Columns */
	columns: IColumn[];
	/** Is header */
	isHeader?: boolean;
}

const Row: React.FC<IRow> = ({ columns, isHeader = false, rowId }) => {
	const rowContent = columns.map((column) =>
		isHeader ? (
			<th key={column.name}>
				<Column key={`${column.name}-${rowId}`} {...column} rowId={rowId} />
			</th>
		) : (
			<td key={column.name}>
				<Column key={`${column.name}-${rowId}`} {...column} rowId={rowId} />
			</td>
		)
	);

	return <tr>{rowContent}</tr>;
};

export default Row;
