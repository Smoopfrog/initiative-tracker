import React from "react";
import Column, { type IColumn } from "../Column.tsx/Column";

export interface IRow {
	/** Row id */
	rowId: string;
	/** Columns */
	columns: IColumn[];
	/** Is header */
	isHeader?: boolean;
	/** Optional className for styling */
	className?: string;
	/** Optional click handler */
	onClick?: () => void;
}

const Row: React.FC<IRow> = ({
	columns,
	isHeader = false,
	rowId,
	className,
	onClick,
}) => {
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

	return (
		<tr className={className} onClick={onClick}>
			{rowContent}
		</tr>
	);
};

export default Row;
