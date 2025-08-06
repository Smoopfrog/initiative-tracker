import React, { type Dispatch } from "react";
import Column, { type IColumn } from "../Column.tsx/Column";

export interface IRow<T extends { id: string }> {
	/** Row id */
	rowId: string;
	/** Columns */
	columns: IColumn<T>[];
	/** Is header */
	isHeader?: boolean;
	/** Optional className for styling */
	className?: string;
	/** Optional click handler */
	onClick?: () => void;
	/** Set rows */
	setData: Dispatch<React.SetStateAction<T[]>>;
}

const Row = <T extends { id: string }>({
	columns,
	isHeader = false,
	rowId,
	className,
	onClick,
	setData,
}: IRow<T>) => {
	const rowContent = columns.map((column) =>
		isHeader ? (
			<th key={column.name}>
				<Column<T>
					key={`${column.name}-${rowId}`}
					{...column}
					rowId={rowId}
					setData={setData}
				/>
			</th>
		) : (
			<td key={column.name}>
				<Column<T>
					key={`${column.name}-${rowId}`}
					{...column}
					rowId={rowId}
					setData={setData}
				/>
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
