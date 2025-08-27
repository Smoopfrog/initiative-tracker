import type { IColumn } from "../../Components/Table/Column.tsx/Column";
import type { ICharacter } from "../../Types/Character";
import ConditionsRenderer from "../Conditions/ConditionsRenderer";

export const initiativeTrackerColumns: IColumn<ICharacter>[] = [
	{
		name: "initiative",
		headerName: "Initiave",
		isEditable: true,
		value: null,
		data: null,
	},
	{
		name: "name",
		headerName: "Name",
		isEditable: true,
		value: null,
		data: null,
	},
	{
		name: "hp",
		headerName: "HP",
		isEditable: true,
		value: null,
		data: null,
	},
	{
		name: "ac",
		headerName: "AC",
		isEditable: true,
		value: null,
		data: null,
	},
	{
		name: "conditions",
		headerName: "Conditions",
		isEditable: false,
		value: null,
		columnRenderer: ConditionsRenderer,
		data: null,
	},
	{
		name: "delete",
		headerName: "Delete",
		value: null,
		data: null,
	},
];
