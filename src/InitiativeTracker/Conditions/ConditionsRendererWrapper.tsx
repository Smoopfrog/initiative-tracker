import React from "react";
import ConditionsRenderer from "./ConditionsRenderer";
import type { IColumnProps } from "../../Components/Table/Column.tsx/Column";

interface ConditionsRendererWrapperProps extends IColumnProps {
	onConditionsUpdate: (rowId: string, conditions: string[]) => void;
}

const ConditionsRendererWrapper: React.FC<ConditionsRendererWrapperProps> = (
	props
) => {
	return <ConditionsRenderer {...props} />;
};

export default ConditionsRendererWrapper;
