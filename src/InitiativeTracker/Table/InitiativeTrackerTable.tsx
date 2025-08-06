import React, { useMemo, useCallback, type Dispatch } from "react";
import Table from "../../Components/Table/Table";
import { initiativeTrackerColumns } from "./initiativeTrackerColumns";
import ConditionsRendererWrapper from "../Conditions/ConditionsRendererWrapper";
import DeleteCellRenderer from "../DeleteCellRenderer";
import type { IRow } from "../../Components/Table/Row/Row";
import type { ICharacter } from "../../Types/Character";
import type { IColumnProps } from "../../Components/Table/Column.tsx/Column";

interface IInitiativeTrackerTableProps {
	/** Initial characters to display in the table */
	characters: ICharacter[];
	selectedCharacterId: string;
	setCharacters: Dispatch<React.SetStateAction<ICharacter[]>>;
}

const InitiativeTrackerTable: React.FC<IInitiativeTrackerTableProps> = ({
	characters,
	selectedCharacterId,
	setCharacters,
}) => {
	const handleConditionsUpdate = useCallback(
		(rowId: string, newConditions: string[]) => {
			setCharacters((prev) =>
				prev.map((char) =>
					char.id === rowId ? { ...char, conditions: newConditions } : char
				)
			);
		},
		[setCharacters]
	);

	const handleDeleteCharacter = useCallback(
		(characterId: string) => {
			setCharacters((prev) => {
				const filteredList = prev.filter((char) => char.id !== characterId);

				return filteredList;
			});
		},
		[setCharacters]
	);

	const rows: IRow<ICharacter>[] = useMemo(
		() =>
			characters.map((character) => ({
				rowId: character.id,
				className: character.id === selectedCharacterId ? "selected" : "",
				setData: setCharacters,
				columns: initiativeTrackerColumns.map((column) => {
					const columnConfig = {
						...column,
						value: character[column.name as keyof ICharacter] || null,
					};

					// Pass the update function to the conditions column
					if (column.name === "conditions") {
						columnConfig.columnRenderer = (props: IColumnProps<ICharacter>) => (
							<ConditionsRendererWrapper
								{...props}
								onConditionsUpdate={handleConditionsUpdate}
							/>
						);
					}

					if (column.name === "delete") {
						columnConfig.columnRenderer = (props: IColumnProps<ICharacter>) => {
							const onClick = () => handleDeleteCharacter(character.id);

							return <DeleteCellRenderer {...props} onClick={onClick} />;
						};
					}

					return columnConfig;
				}),
			})),
		[
			characters,
			selectedCharacterId,
			handleConditionsUpdate,
			handleDeleteCharacter,
		]
	);

	const headerRow: IRow<ICharacter> = {
		rowId: "header",
		columns: initiativeTrackerColumns.map((column) => ({
			...column,
			value: column.headerName,
			isEditable: false,
			columnRenderer: undefined,
		})),
		isHeader: true,
		setData: () => {},
	};

	return <Table rows={rows} headerRow={headerRow} />;
};

export default InitiativeTrackerTable;
