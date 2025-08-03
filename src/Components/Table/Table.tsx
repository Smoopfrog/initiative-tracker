import React from "react";
import type { IRow } from "./Row/Row";
import Row from "./Row/Row";

interface ITableProps {
	/** Table Rows */
	rows: IRow[];
	/** Header Row */
	headerRow?: IRow;
}

const Table: React.FC<ITableProps> = ({ rows, headerRow }) => {
	const bodyRows = rows.filter((row) => !row.isHeader);

	return (
		<table className="data-table">
			{headerRow && (
				<thead>
					<Row key={`header-${headerRow.rowId}`} {...headerRow} />
				</thead>
			)}
			<tbody>
				{bodyRows.map((row, index) => (
					<Row key={`body-${index}`} {...row} />
				))}
			</tbody>
		</table>
	);
};

export default Table;
