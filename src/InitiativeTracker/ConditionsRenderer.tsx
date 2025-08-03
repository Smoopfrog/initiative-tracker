import React from "react";

// Example custom renderer for conditions
const ConditionsRenderer: React.FC<{
	rowId: string;
	name: string;
	value: string | number | string[] | number[] | null;
	type?: "text" | "number";
	isEditable?: boolean;
}> = ({ value }) => {
	// Convert value to array of conditions
	const conditions = Array.isArray(value) ? value : value ? [value] : [];

	return (
		<div className="conditions-container">
			{conditions.length > 0 ? (
				conditions.map((condition, index) => (
					<span key={index} className="condition-badge">
						{condition}
					</span>
				))
			) : (
				<span className="no-conditions">-</span>
			)}
		</div>
	);
};

export default ConditionsRenderer;
