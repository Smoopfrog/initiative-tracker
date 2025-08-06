import React from "react";
import ConditionsRenderer from "./ConditionsRenderer";
import type { IColumnProps } from "../../Components/Table/Column.tsx/Column";
import type { ICharacter } from "../../Types/Character";

interface ConditionsRendererWrapperProps extends IColumnProps<ICharacter> {
	onConditionsUpdate: (rowId: string, conditions: string[]) => void;
}

const ConditionsRendererWrapper: React.FC<ConditionsRendererWrapperProps> = (
	props
) => {
	return <ConditionsRenderer {...props} />;
};

export default ConditionsRendererWrapper;
