import React from "react";

interface IColumn {
	/** Column name */
	name: string;
	/** Column value */
	value: string;
}

export interface IRowProps {
	/** Columns */
	columns: IColumn[];
	/** Is header */
	isHeader?: boolean;
}

const Row: React.FC<IRowProps> = ({ columns, isHeader = false }) => {
	const rowContent = columns.map((column) =>
		isHeader ? (
			<th key={column.name}>{column.value}</th>
		) : (
			<td key={column.name}>{column.value}</td>
		)
	);

	return <tr>{rowContent}</tr>;
};

export default Row;
