import type { ICharacter } from "../Types/Character";

export const initialCharacters: ICharacter[] = [
	{
		id: "1",
		initiative: 10,
		name: "John Doe",
		hp: 10,
		ac: 10,
		conditions: ["Poisoned", "Prone"],
	},
	{
		id: "2",
		initiative: 20,
		name: "Jane Doe",
		hp: 10,
		ac: 10,
		conditions: ["Blinded"],
	},
	{
		id: "3",
		initiative: 30,
		name: "Alex Doe",
		hp: 10,
		ac: 10,
		conditions: [],
	},
	{
		id: "4",
		initiative: 40,
		name: "Alexandra Doe",
		hp: 10,
		ac: 10,
		conditions: ["Frightened", "Grappled"],
	},
	{
		id: "5",
		initiative: 50,
		name: "Bobobobo",
		hp: 10,
		ac: 10,
		conditions: [],
	},
];