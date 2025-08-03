import type { IColumn } from "../Components/Column";

export const initiativeTrackerColumns: IColumn[] = [
	{
		name: "initiative",
		headerName: "Initiave",
		isEditable: true,
		type: "number",
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
		type: "number",
		value: null,
	},
	{
		name: "ac",
		headerName: "AC",
		isEditable: true,
		type: "number",
		value: null,
	},
];
