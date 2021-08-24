import { Character } from "./model/Character";

export function validateCharacter(input: Character) {
    if(!input.name || !input.health || !input.attack || !input.defense) {
        return false;
    }

    if(input.health <= 0 || input.attack <= 0 || input.defense <= 0) {
        return false;
    }

    else {
        return true 
    }
}