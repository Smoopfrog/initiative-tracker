import React, { useMemo, useState } from "react";
import InitiativeTrackerTable from "./Table/InitiativeTrackerTable";
import InitiativeTrackerMenu from "./InitiativeTrackerMenu";
import { initialCharacters } from "../Constants/DemoChars";
import type { ICharacter } from "../Types/Character";

const InitiativeTracker: React.FC = () => {
	const [characters, setCharacters] = useState<ICharacter[]>(
		initialCharacters || []
	);

	const [selectedCharacterId, setSelectedCharacterId] = useState<string>(
		characters[0]?.id || ""
	);

	const sortedCharacters = useMemo(
		() => characters.sort((a, b) => b.initiative - a.initiative),
		[characters]
	);

	console.log("hello");
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
