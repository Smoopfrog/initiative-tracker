import React, { useState } from "react";
import ConditionsModal from "./ConditionsModal";
import { dndConditions } from "../../Constants/Conditions";
import { conditionIcons } from "../../Constants/ConditionIcons";

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

	// Helper function to get condition data and icon component
	const getCondition = (conditionName: string) => {
		const condition = dndConditions.find((c) => c.name === conditionName);
		if (condition) {
			const IconComponent = conditionIcons[condition.icon];
			return { ...condition, IconComponent };
		}
		return null;
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
					{conditions.map((condition, index) => {
						const conditionData = getCondition(condition);

						const conditionTitle = `${conditionData?.name}\u00A0${conditionData?.description}`;
						return (
							<span
								key={index}
								className="condition-badge"
								title={conditionTitle}
							>
								{conditionData?.IconComponent && (
									<conditionData.IconComponent />
								)}
							</span>
						);
					})}
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
