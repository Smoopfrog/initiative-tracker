import React from "react";
import type { ICharacter } from "../Types/Character";

interface IInitiativeTrackerMenuProps {
	characters: ICharacter[];
	selectedCharacterId: string | null;
	setSelectedCharacterId: (charId: string) => void;
}

const InitiativeTrackerMenu: React.FC<IInitiativeTrackerMenuProps> = ({
	characters,
	selectedCharacterId,
	setSelectedCharacterId,
}) => {
	const onNavigation = (direction: "next" | "previous") => {
		if (!selectedCharacterId || characters.length === 0) {
			return null;
		}

		// Get current character index
		const selectedCharIndex = characters.findIndex(
			(character) => character.id === selectedCharacterId
		);

		// handle next character
		if (direction === "next") {
			if (characters[selectedCharIndex + 1]) {
				setSelectedCharacterId(characters[selectedCharIndex + 1].id);
			} else {
				setSelectedCharacterId(characters[0].id);
			}
		}

		// handle previous character
		if (direction === "previous") {
			if (characters[selectedCharIndex - 1]) {
				setSelectedCharacterId(characters[selectedCharIndex - 1].id);
			} else {
				setSelectedCharacterId(characters[characters.length - 1].id);
			}
		}
	};

	return (
		<div>
			<button>+</button>
			<button
				onClick={() => {
					onNavigation("previous");
				}}
			>
				&lt;
			</button>
			<button
				onClick={() => {
					onNavigation("next");
				}}
			>
				&gt;
			</button>
		</div>
	);
};

export default InitiativeTrackerMenu;
