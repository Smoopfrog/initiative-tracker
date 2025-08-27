import React from "react";
import type { ICharacter } from "../../Types/Character";
import type { IColumnProps } from "../../Components/Table/Column.tsx/Column";
import DefaultColumn from "../../Components/Table/Column.tsx/DefaultColumn";
import { FaDroplet } from "react-icons/fa6";
import { FaSkull } from "react-icons/fa";

/**
 * HP renderer component
 * Displays the HP and max HP of a character
 */
const HPRenderer: React.FC<IColumnProps<ICharacter>> = (props) => {
	const hpPercentage =
		props.data?.hp && props.data?.maxHp
			? props.data?.hp / props.data?.maxHp
			: 0;
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
			{hpPercentage < 0.5 && hpPercentage > 0 && <FaDroplet color="darkred" />}
			{hpPercentage <= 0 && <FaSkull />}
		</div>
	);
};

export default HPRenderer;
