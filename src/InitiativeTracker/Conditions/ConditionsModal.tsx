import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { dndConditions } from "../../Constants/Conditions";
import { conditionIcons } from "../../Constants/ConditionIcons";

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

	// Update local state when selectedConditions prop changes
	useEffect(() => {
		setLocalSelectedConditions(selectedConditions);
	}, [selectedConditions]);

	// Handle escape key to close modal
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape" && isOpen) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			// Prevent body scroll when modal is open
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

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

	const modalContent = (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h2>Select Conditions</h2>
					<button
						className="btn btn-icon btn-sm"
						onClick={onClose}
						style={{ background: "none", color: "white", border: "none" }}
					>
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
											onClick={() => handleConditionToggle(condition.name)}
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
					<button className="btn btn-secondary" onClick={handleCancel}>
						Cancel
					</button>
					<button className="btn btn-primary" onClick={handleSave}>
						Save
					</button>
				</div>
			</div>
		</div>
	);

	// Use createPortal to render the modal outside of the table structure
	return createPortal(modalContent, document.body);
};

export default ConditionsModal;
