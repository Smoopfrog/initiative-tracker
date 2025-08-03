import React, { useState } from "react";
import Table from "../Components/Table/Table";
import { initiativeTrackerColumns } from "./initiativeTrackerColumns";
import type { IRow } from "../Components/Table/Row/Row";
import ConditionsRendererWrapper from "./ConditionsRendererWrapper";

interface ICharacter {
	id: string;
	initiative: number;
	name: string;
	hp: number;
	ac: number;
	conditions?: string[];
}

const initialCharacters: ICharacter[] = [
	{
		id: "1",
		initiative: 10,
		name: "John Doe",
		hp: 10,
		ac: 10,
		conditions: ["Poisoned", "Prone"],
	},
	{
		id: "2",
		initiative: 20,
		name: "Jane Doe",
		hp: 10,
		ac: 10,
		conditions: ["Blinded"],
	},
	{
		id: "3",
		initiative: 30,
		name: "Alex Doe",
		hp: 10,
		ac: 10,
		conditions: [],
	},
	{
		id: "4",
		initiative: 40,
		name: "Alexandra Doe",
		hp: 10,
		ac: 10,
		conditions: ["Frightened", "Grappled"],
	},
	{
		id: "5",
		initiative: 50,
		name: "Alexandra Doe",
		hp: 10,
		ac: 10,
		conditions: [],
	},
];

const InitiativeTracker: React.FC = () => {
	const [characters, setCharacters] = useState<ICharacter[]>(initialCharacters);

	const handleConditionsUpdate = (rowId: string, newConditions: string[]) => {
		setCharacters((prev) =>
			prev.map((char) =>
				char.id === rowId ? { ...char, conditions: newConditions } : char
			)
		);
	};

	const rows: IRow[] = characters.map((character) => ({
		rowId: character.id,
		columns: initiativeTrackerColumns.map((column) => {
			const columnConfig = {
				...column,
				value: character[column.name as keyof ICharacter] || null,
			};

			// Pass the update function to the conditions column
			if (column.name === "conditions") {
				columnConfig.columnRenderer = (
					props: import("../Components/Table/Column.tsx/Column").IColumnProps
				) => (
					<ConditionsRendererWrapper
						{...props}
						onConditionsUpdate={handleConditionsUpdate}
					/>
				);
			}

			return columnConfig;
		}),
	}));

	const headerRow: IRow = {
		rowId: "header",
		columns: initiativeTrackerColumns.map((column) => ({
			...column,
			value: column.headerName,
			isEditable: false,
			columnRenderer: undefined,
		})),
		isHeader: true,
	};

	return <Table rows={rows} headerRow={headerRow} />;
};

export default InitiativeTracker;
