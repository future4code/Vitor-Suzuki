import { validateCharacter } from "../src/validateCharacter"

describe("Testes para verificar a função validateCharacter", () => {
    test("Retorna falso com um nome vazio", () =>{
        const result = validateCharacter({
            name: "",
            health: 100,
            attack: 600,
            defense: 50
        })

        expect(result).toBe(false)
    });

    test("Retorna falso com a vida igual à 0", () =>{
        const result = validateCharacter({
            name: "Ryu",
            health: 0,
            attack: 600,
            defense: 50
        })

        expect(result).toBe(false)
    });

    test("Retorna falso com a força igual à 0", () =>{
        const result = validateCharacter({
            name: "Ken",
            health: 100,
            attack: 0,
            defense: 50
        })

        expect(result).toBe(false)
    });

    test("Retorna falso com a defesa igual à 0", () =>{
        const result = validateCharacter({
            name: "",
            health: 100,
            attack: 450,
            defense: 0
        })

        expect(result).toBe(false)
    })

    test("Retorna falso com um nome vazio", () =>{
        const result = validateCharacter({
            name: "Blanka",
            health: 0,
            attack: 0,
            defense: 0
        })

        expect(result).toBe(false)
    })

    test("Retorna true com todas as informações preenchidas", () =>{
        const result = validateCharacter({
            name: "Chun Li",
            health: 100,
            attack: 600,
            defense: 50
        })

        expect(result).toBe(true)
    })
})