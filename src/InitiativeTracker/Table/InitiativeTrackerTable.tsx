import React, { useState } from "react";
import Table from "../../Components/Table/Table";
import { initiativeTrackerColumns } from "./initiativeTrackerColumns";
import type { IRow } from "../../Components/Table/Row/Row";
import ConditionsRendererWrapper from "../Conditions/ConditionsRendererWrapper";
import type { ICharacter } from "../../Types/Character";

interface IInitiativeTrackerTableProps {
	/** Initial characters to display in the table */
	initialCharacters?: ICharacter[];
}

const InitiativeTrackerTable: React.FC<IInitiativeTrackerTableProps> = ({
	initialCharacters,
}) => {
	const [characters, setCharacters] = useState<ICharacter[]>(
		initialCharacters || []
	);

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
					props: import("../../Components/Table/Column.tsx/Column").IColumnProps
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

export default InitiativeTrackerTable;
