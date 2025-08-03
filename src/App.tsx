import "./App.css";
import Table from "./Components/Table/Table";
import type { IRow } from "./Components/Table/Row/Row";

const rows: IRow[] = [
	{
		rowId: "header",
		columns: [
			{ name: "Initiave", value: "Initiave" },
			{ name: "Name", value: "Name" },
			{ name: "HP", value: "HP" },
			{ name: "AC", value: "AC" },
		],
		isHeader: true,
	},
	{
		rowId: "1",
		columns: [
			{ name: "1", value: "1" },
			{ name: "John Doe", value: "John Doe" },
			{ name: "10", value: "10" },
			{ name: "18", value: "18" },
		],
	},
	{
		rowId: "2",
		columns: [
			{ name: "2", value: "2" },
			{ name: "Jane Doe", value: "Jane Doe" },
			{ name: "12", value: "12" },
			{ name: "16", value: "16" },
		],
	},
	{
		rowId: "3",
		columns: [
			{ name: "3", value: "3" },
			{ name: "Alex Doe", value: "Alex Doe" },
			{ name: "14", value: "14" },
			{ name: "16", value: "16" },
		],
	},
	{
		rowId: "4",
		columns: [
			{ name: "4", value: "4", isEditable: true },
			{ name: "Alexandra Doe", value: "Alexandra Doe", isEditable: true },
			{ name: "14", value: "14", isEditable: true },
			{ name: "16", value: "16", isEditable: true },
		],
	},
];

function App() {
	return (
		<div className="table-container">
			<Table rows={rows} />
		</div>
	);
}

export default App;
