import type { IColumn } from "../../Components/Table/Column.tsx/Column";
import ConditionsRenderer from "../Conditions/ConditionsRenderer";

export const initiativeTrackerColumns: IColumn[] = [
	{
		name: "initiative",
		headerName: "Initiave",
		isEditable: true,
		value: null,
	},
	{
		name: "name",
		headerName: "Name",
		isEditable: true,
		value: null,
	},
	{
		name: "hp",
		headerName: "HP",
		isEditable: true,
		value: null,
	},
	{
		name: "ac",
		headerName: "AC",
		isEditable: true,
		value: null,
	},
	{
		name: "conditions",
		headerName: "Conditions",
		isEditable: false,
		value: null,
		columnRenderer: ConditionsRenderer,
	},
];
