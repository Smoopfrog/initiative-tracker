import React, { useState } from "react";
import { dndConditions } from "../Constants/Conditions";
import { conditionIcons } from "../Constants/ConditionIcons";

interface ConditionsModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedConditions: string[];
	onConditionsChange: (conditions: string[]) => void;
}

const ConditionsModal: React.FC<ConditionsModalProps> = ({
	isOpen,
	onClose,
	selectedConditions,
	onConditionsChange,
}) => {
	const [localSelectedConditions, setLocalSelectedConditions] =
		useState<string[]>(selectedConditions);

	const handleConditionToggle = (conditionName: string) => {
		setLocalSelectedConditions((prev) =>
			prev.includes(conditionName)
				? prev.filter((c) => c !== conditionName)
				: [...prev, conditionName]
		);
	};

	const handleSave = () => {
		onConditionsChange(localSelectedConditions);
		onClose();
	};

	const handleCancel = () => {
		setLocalSelectedConditions(selectedConditions);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h2>Select Conditions</h2>
					<button className="close-button" onClick={onClose}>
						×
					</button>
				</div>

				<div className="modal-body">
					<div className="conditions-grid">
						{dndConditions.map((condition) => {
							const IconComponent = conditionIcons[condition.icon];
							return (
								<div
									key={condition.name}
									className={`condition-item ${
										localSelectedConditions.includes(condition.name)
											? "selected"
											: ""
									}`}
									onClick={() => handleConditionToggle(condition.name)}
								>
									<div className="condition-checkbox">
										<input
											type="checkbox"
											checked={localSelectedConditions.includes(condition.name)}
											onChange={() => handleConditionToggle(condition.name)}
										/>
									</div>
									<div className="condition-info">
										<h4>
											<span className="condition-icon">
												{IconComponent && <IconComponent />}
											</span>
											{condition.name}
										</h4>
										<p>{condition.description}</p>
										{condition.levels && (
											<div className="condition-levels">
												{condition.levels.map((level, index) => (
													<div key={index} className="level-item">
														{level}
													</div>
												))}
											</div>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="modal-footer">
					<button className="cancel-button" onClick={handleCancel}>
						Cancel
					</button>
					<button className="save-button" onClick={handleSave}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConditionsModal;
