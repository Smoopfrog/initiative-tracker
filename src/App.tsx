import "./App.css";
import Table from "./Components/Table/Table";

const rows = [
	{
		columns: [
			{ name: "Initiave", value: "Initiave" },
			{ name: "Name", value: "Name" },
			{ name: "HP", value: "HP" },
			{ name: "AC", value: "AC" },
		],
		isHeader: true,
	},
	{
		columns: [
			{ name: "1", value: "1" },
			{ name: "John Doe", value: "John Doe" },
			{ name: "10", value: "10" },
			{ name: "18", value: "18" },
		],
	},
	{
		columns: [
			{ name: "2", value: "2" },
			{ name: "Jane Doe", value: "Jane Doe" },
			{ name: "12", value: "12" },
			{ name: "16", value: "16" },
		],
	},
	{
		columns: [
			{ name: "3", value: "3" },
			{ name: "Alex Doe", value: "Alex Doe" },
			{ name: "14", value: "14" },
			{ name: "16", value: "16" },
		],
	},
	{
		columns: [
			{ name: "4", value: "4" },
			{ name: "Alexandra Doe", value: "Alexandra Doe" },
			{ name: "14", value: "14" },
			{ name: "16", value: "16" },
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
