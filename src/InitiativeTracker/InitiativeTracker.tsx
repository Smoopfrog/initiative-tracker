import React, { useEffect, useMemo, useState } from "react";
import InitiativeTrackerTable from "./Table/InitiativeTrackerTable";
import InitiativeTrackerMenu from "./InitiativeTrackerMenu";
import type { ICharacter } from "../Types/Character";
import { CHARACTERS_LOCAL_STORAGE_KEY } from "../Constants/LocalStorage";

const InitiativeTracker: React.FC = () => {
	const [characters, setCharacters] = useState<ICharacter[]>(
		JSON.parse(localStorage.getItem(CHARACTERS_LOCAL_STORAGE_KEY) || "[]")
	);

	const [selectedCharacterId, setSelectedCharacterId] = useState<string>(
		characters[0]?.id || ""
	);

	const sortedCharacters = useMemo(
		() => characters.sort((a, b) => b.initiative - a.initiative),
		[characters]
	);

	useEffect(() => {
		localStorage.setItem(
			CHARACTERS_LOCAL_STORAGE_KEY,
			JSON.stringify(characters)
		);
	}, [characters]);

	return (
		<div>
			<InitiativeTrackerMenu
				characters={sortedCharacters}
				setCharacters={setCharacters}
				selectedCharacterId={selectedCharacterId}
				setSelectedCharacterId={setSelectedCharacterId}
			/>
			<InitiativeTrackerTable
				characters={sortedCharacters}
				selectedCharacterId={selectedCharacterId}
				setCharacters={setCharacters}
			/>
		</div>
	);
};

export default InitiativeTracker;
