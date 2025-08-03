import React from "react";
import type { IRowProps } from "./Row/Row";
import Row from "./Row/Row";

interface ITableProps {
	/** Table Rows */
	rows: IRowProps[];
}

const Table: React.FC<ITableProps> = ({ rows }) => {
	const headerRows = rows.filter((row) => row.isHeader);
	const bodyRows = rows.filter((row) => !row.isHeader);
	const test = true;
	return (
		<table className="data-table">
			{headerRows.length > 0 && (
				<thead>
					{headerRows.map((row, index) => (
						<Row key={`header-${index}`} {...row} />
					))}
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
