import React from "react";
import InitiativeTrackerTable from "./Table/InitiativeTrackerTable";
import InitiativeTrackerMenu from "./InitiativeTrackerMenu";
import { initialCharacters } from "../Constants/DemoChars";

const InitiativeTracker: React.FC = () => {
	const characters = initialCharacters;

	const [selectedCharacterId, setSelectedCharacterId] = React.useState<
		string | null
	>(characters[0]?.id || null);

	return (
		<div>
			<InitiativeTrackerMenu
				characters={characters}
				selectedCharacterId={selectedCharacterId}
				setSelectedCharacterId={setSelectedCharacterId}
			/>
			<InitiativeTrackerTable initialCharacters={characters} />
		</div>
	);
};

export default InitiativeTracker;
