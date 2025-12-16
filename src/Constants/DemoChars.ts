import type { ICharacter } from "../Types/Character";

export const initialCharacters: ICharacter[] = [
	{
		id: "1",
		initiative: 10,
		name: "Brenda is cute",
		hp: 10,
		maxHp: 10,
		ac: 21,
		conditions: ["Poisoned", "Prone"],
	},
	{
		id: "2",
		initiative: 20,
		name: "Brenda is hot",
		hp: 10,
		maxHp: 10,
		ac: 10,
		conditions: ["Blinded"],
	},
	{
		id: "3",
		initiative: 30,
		name: "Brenda is a bitch (This was ai generated)",
		hp: 500,
		maxHp: 500,
		ac: 19,
		conditions: [],
	},
	{
		id: "4",
		initiative: 40,
		name: "Brenda is smart",
		hp: 10,
		maxHp: 10,
		ac: 8,
		conditions: ["Frightened", "Grappled"],
	},
	{
		id: "5",
		initiative: 50,
		name: "Brenda is a nerd (also ai generated)",
		hp: 50,
		maxHp: 110,
		ac: 10,
		conditions: [],
	},
];