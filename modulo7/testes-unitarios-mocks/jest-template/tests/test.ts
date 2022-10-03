
import { Character, performAttack, validateCharacter } from "../src"

//Exercício 2
//a)Crie um teste que verifique o comportamento da função com um personagem
//com o nome vazio, isto é: "".
describe('Testing function validateCharacter', () => {

    test('Should return false for empty name', () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            defense: 400,
            strength: 800
        })

        expect(result).toBe(false)
    })

    //b) Crie um teste que verifique o comportamento da função com um personagem
    //com a vida igual a zero.

    test('Should return false for life = 0', () => {
        const result = validateCharacter({
            name: 'Pikachu',
            life: 0,
            defense: 500,
            strength: 1000
        })

        expect(result).toBe(false)
    })

    //c) Crie um teste que verifique o comportamento da função com um personagem
    //com força igual a zero.

    test('Should return false for strength = 0', () => {
        const result = validateCharacter({
            name: 'Bullbasaur',
            life: 1500,
            defense: 300,
            strength: 0
        })

        expect(result).toBe(false)
    })

    //d) Crie um teste que verifique o comportamento da função com um personagem
    //com a defesa igual a zero.

    test('Should return false for defense = 0', () => {
        const result = validateCharacter({
            name: 'Squirtle',
            life: 1500,
            defense: 0,
            strength: 500
        })

        expect(result).toBe(false)
    })

    //e) Crie um teste que verifique o comportamento da função com um personagem
    //com a vida ou a força ou a defesa com valor negativo.

    test('Shoul return false for life or defense or strength = negative value', () => {
        const result = validateCharacter({
            name: 'Psyduck',
            life: 1500,
            defense: -1,
            strength: 100
        })

        expect(result).toBe(false)
    })

    //f) Crie um teste que verifique o comportamento da função com um personagem
    //com as informações válidas.

    test('Shoulf return true for all valid inputs', () => {
        const result = validateCharacter({
            name: 'Charizard',
            life: 1500,
            defense: 750,
            strength: 900
        })

        expect(result).toBe(true)
    })

    //Exercício 4
    //a) De qual das funções (validateCharacter ou performAttack) devemos criar um Mock nos próximos testes? Justifique.
    //R: O Mock deverá ser feito na função validateCharacter, pois é ela que esta sendo implementada como dependência da função attack.
})


describe('Testing Attack function', () => {

    const validatorMock = jest.fn(() => {
        return true
    })

    const attacker: Character = {
        name: 'Charizard',
        life: 1500,
        defense: 750,
        strength: 900
    }

    const defender: Character = {
        name: 'Bullbasaur',
        life: 1500,
        defense: 300,
        strength: 0
    }

    performAttack(attacker, defender, validatorMock as any)

    expect(defender.life).toEqual(1300)
    expect(validatorMock).toHaveBeenCalled()

})



