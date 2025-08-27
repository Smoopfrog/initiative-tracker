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
				id: `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
				initiative: 0,
				name: "",
				ac: 10,
				hp: 10,
				maxHp: 10,
			},
		]);
	};

	return (
		<div
			style={{
				display: "flex",
				gap: "1rem",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<button
				className="btn btn-primary btn-icon"
				onClick={() => {
					addCharacter();
				}}
				title="Add Character"
			>
				+
			</button>
			<button
				className="btn btn-secondary btn-icon"
				onClick={() => {
					onNavigation("previous");
				}}
				disabled={!selectedCharacterId || characters.length === 0}
				title="Previous Character"
			>
				&lt;
			</button>
			<button
				className="btn btn-secondary btn-icon"
				onClick={() => {
					onNavigation("next");
				}}
				disabled={!selectedCharacterId || characters.length === 0}
				title="Next Character"
			>
				&gt;
			</button>
		</div>
	);
};

export default InitiativeTrackerMenu;
