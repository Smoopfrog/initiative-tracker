import React from "react";
import type { ICharacter } from "../../Types/Character";
import type { IColumnProps } from "../../Components/Table/Column.tsx/Column";
import DefaultColumn from "../../Components/Table/Column.tsx/DefaultColumn";

/**
 * HP renderer component
 * Displays the HP and max HP of a character
 */
const HPRenderer: React.FC<IColumnProps<ICharacter>> = (props) => {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<DefaultColumn
				{...props}
				value={props.value as number}
				style={{ width: "50px" }}
			/>
			/
			<DefaultColumn
				{...props}
				name="maxHp"
				value={props.data?.maxHp || 0}
				style={{ width: "50px" }}
			/>
		</div>
	);
};

export default HPRenderer;
