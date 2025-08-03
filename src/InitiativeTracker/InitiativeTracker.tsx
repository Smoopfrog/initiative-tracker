import React from "react";
import Table from "../Components/Table/Table";
import { initiativeTrackerColumns } from "./initiativeTrackerColumns";
import type { IRow } from "../Components/Table/Row/Row";

interface ICharacter {
	id: string;
	initiative: number;
	name: string;
	hp: number;
	ac: number;
}

const characters: ICharacter[] = [
	{
		id: "1",
		initiative: 10,
		name: "John Doe",
		hp: 10,
		ac: 10,
	},
	{
		id: "2",
		initiative: 20,
		name: "Jane Doe",
		hp: 10,
		ac: 10,
	},
	{
		id: "3",
		initiative: 30,
		name: "Alex Doe",
		hp: 10,
		ac: 10,
	},
	{
		id: "4",
		initiative: 40,
		name: "Alexandra Doe",
		hp: 10,
		ac: 10,
	},
	{
		id: "5",
		initiative: 50,
		name: "Alexandra Doe",
		hp: 10,
		ac: 10,
	},
];

const InitiativeTracker: React.FC = () => {
	const rows: IRow[] = characters.map((character) => ({
		rowId: character.id,
		columns: initiativeTrackerColumns.map((column) => ({
			...column,
			value: character[column.name as keyof ICharacter] || null,
		})),
	}));

	const headerRow: IRow = {
		rowId: "header",
		columns: initiativeTrackerColumns.map((column) => ({
			...column,
			value: column.headerName,
			isEditable: false,
		})),
		isHeader: true,
	};

	return <Table rows={rows} headerRow={headerRow} />;
};

export default InitiativeTracker;
