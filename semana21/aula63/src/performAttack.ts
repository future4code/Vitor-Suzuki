import { Character } from "./model/Character";
import { validateCharacter } from "./validateCharacter";

export function performAttack(attacker: Character, defender: Character) {
    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid Character")
    }

    if(attacker.attack > defender.defense) {
        defender.health === attacker.attack - defender.defense
    }
}

export function performAttack2(attacker: Character, defender: Character, validator: (input: Character)=> boolean) {
    if(!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }

    if(attacker.attack > defender.defense) {
        defender.health === attacker.attack - defender.defense
    }
}

// c. A diferença é a inversão de Dependências através do validator, permitindo uma realização de testes mais estável.