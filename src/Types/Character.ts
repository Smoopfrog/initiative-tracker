export interface ICharacter {
    id: string;
    initiative: number;
    name: string;
    hp: number;
    maxHp: number;
    ac: number;
    conditions?: string[];
}