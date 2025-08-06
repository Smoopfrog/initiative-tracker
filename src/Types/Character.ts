export interface ICharacter {
    id: string;
    initiative: number;
    name: string;
    hp: number;
    ac: number;
    conditions?: string[];
}