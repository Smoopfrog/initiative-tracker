import React, { useState } from "react";
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

	return (
		<div>
			<InitiativeTrackerMenu
				characters={characters}
				setCharacters={setCharacters}
				selectedCharacterId={selectedCharacterId}
				setSelectedCharacterId={setSelectedCharacterId}
			/>
			<InitiativeTrackerTable
				characters={characters}
				selectedCharacterId={selectedCharacterId}
				setCharacters={setCharacters}
			/>
		</div>
	);
};

export default InitiativeTracker;
