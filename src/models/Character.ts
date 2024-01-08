import { LocationCharacter } from "./LocationCharacter";

export class Character {
    constructor(
        public id: number,
        public name: string,
        public status: string,
        public species: string,
        public type: string,
        public gender: string,
        public origin: LocationCharacter,
        public location: LocationCharacter,
        public image: string,
        public episode: string[],
        public url: string,
        public created: string
    ) {}
}