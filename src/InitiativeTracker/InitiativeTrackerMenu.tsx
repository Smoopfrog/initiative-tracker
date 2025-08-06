import React, { type Dispatch } from "react";
import type { ICharacter } from "../Types/Character";

interface IInitiativeTrackerMenuProps {
	characters: ICharacter[];
	selectedCharacterId: string | null;
	setSelectedCharacterId: (charId: string) => void;
	setCharacters: Dispatch<React.SetStateAction<ICharacter[]>>;
}

const InitiativeTrackerMenu: React.FC<IInitiativeTrackerMenuProps> = ({
	characters,
	setCharacters,
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

	const addCharacter = () => {
		setCharacters((prev) => [
			...prev,
			{
				id: "0",
				initiative: 0,
				name: "",
				ac: 10,
				hp: 10,
			},
		]);
	};

	return (
		<div>
			<button
				onClick={() => {
					addCharacter();
				}}
			>
				+
			</button>
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
