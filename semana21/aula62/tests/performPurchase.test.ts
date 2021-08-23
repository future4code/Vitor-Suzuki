import { performPurchase } from '../src/performPurchase';


describe("Testando a função performPurchase.ts", () => {
    test("Testando um usuário com o saldo maior do que o valor de compra", () => {

        const user = {
            name: "Malu Creizi",
            balance: 50
        }

        const result = performPurchase(user, 10)

        expect(result).toEqual({
            name: "Malu Creizi",
            balance: 40
        })

    })
})

describe("Testando a função performPurchase.ts", () => {
    test("Testando um usuário com o saldo igual ao valor de compra", () => {

        const user = {
            name: "Malu Creizi",
            balance: 50
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            name: "Malu Creizi",
            balance: 0
        })

    })
})

describe("Testando a função performPurchase.ts", () => {
    test("Testando um usuário com o saldo menor do que o valor de compra", () => {

        const user = {
            name: "Malu Creizi",
            balance: 50
        }

        const result = performPurchase(user, 70)

        expect(result).not.toBeDefined()

    })
})