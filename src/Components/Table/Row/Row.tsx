import React from "react";
import Column, { type IColumn } from "../../Column";

export interface IRowProps {
	/** Columns */
	columns: IColumn[];
	/** Is header */
	isHeader?: boolean;
}

const Row: React.FC<IRowProps> = ({ columns, isHeader = false }) => {
	const rowContent = columns.map((column) =>
		isHeader ? (
			<th key={column.name}>
				<Column {...column} />
			</th>
		) : (
			<td key={column.name}>
				<Column {...column} />
			</td>
		)
	);

	return <tr>{rowContent}</tr>;
};

export default Row;
