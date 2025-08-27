import React, { useMemo, useState, useEffect } from "react";
import InitiativeTrackerTable from "./Table/InitiativeTrackerTable";
import InitiativeTrackerMenu from "./InitiativeTrackerMenu";
import { initialCharacters } from "../Constants/DemoChars";
import type { ICharacter } from "../Types/Character";

const InitiativeTracker: React.FC = () => {
	const STORAGE_KEY = "initiativeTracker:characters";
	const [characters, setCharacters] = useState<ICharacter[]>(
		initialCharacters || []
	);

	const [selectedCharacterId, setSelectedCharacterId] = useState<string>(
		characters[0]?.id || ""
	);

	useEffect(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) setCharacters(parsed);
    }
  } catch {
		// I think this will stop the app from crashing if storage is unavailable? JEFF PLEASE CHECK
  }
}, []);

  useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
		} catch {
			// If for whatever reason the browser has local storage disabled, or there is some other issue, this should prevent a crash JEFF PLEASE CHECK
		}
	}, [characters]);

	const sortedCharacters = useMemo(
		() => characters.sort((a, b) => b.initiative - a.initiative),
		[characters]
	);

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
