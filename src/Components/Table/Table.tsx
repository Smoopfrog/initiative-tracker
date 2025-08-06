import type { IRow } from "./Row/Row";
import Row from "./Row/Row";

interface ITableProps<T extends { id: string }> {
	/** Table Rows */
	rows: IRow<T>[];
	/** Header Row */
	headerRow?: IRow<T>;
}

const Table = <T extends { id: string }>({
	rows,
	headerRow,
}: ITableProps<T>) => {
	const bodyRows = rows.filter((row) => !row.isHeader);

	return (
		<table className="data-table">
			{headerRow && (
				<thead>
					<Row key={`header-${headerRow.rowId}`} {...headerRow} />
				</thead>
			)}
			<tbody>
				{bodyRows.map((row) => (
					<Row key={`body-${row.rowId}`} {...row} />
				))}
			</tbody>
		</table>
	);
};

export default Table;
