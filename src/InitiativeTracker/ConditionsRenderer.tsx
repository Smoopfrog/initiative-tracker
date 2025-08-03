import React, { useState } from "react";
import ConditionsModal from "./ConditionsModal";

// Example custom renderer for conditions
const ConditionsRenderer: React.FC<{
	rowId: string;
	name: string;
	value: string | number | string[] | number[] | null;
	type?: "text" | "number";
	isEditable?: boolean;
	onConditionsUpdate?: (rowId: string, conditions: string[]) => void;
}> = ({ value, rowId, onConditionsUpdate }) => {
	// Convert value to array of conditions and filter to only strings
	const conditions = Array.isArray(value)
		? (value.filter((v) => typeof v === "string") as string[])
		: value && typeof value === "string"
		? [value]
		: [];
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleConditionsChange = (newConditions: string[]) => {
		if (onConditionsUpdate) {
			onConditionsUpdate(rowId, newConditions);
		}
	};

	return (
		<>
			<div className="conditions-container">
				<button
					className="edit-conditions-button"
					onClick={() => setIsModalOpen(true)}
					title="Edit conditions"
				>
					+
				</button>
				<div className="selected-conditions">
					{conditions.map((condition, index) => (
						<span key={index} className="condition-badge">
							{condition}
						</span>
					))}
				</div>
			</div>
			<ConditionsModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				selectedConditions={conditions}
				onConditionsChange={handleConditionsChange}
			/>
		</>
	);
};

export default ConditionsRenderer;
