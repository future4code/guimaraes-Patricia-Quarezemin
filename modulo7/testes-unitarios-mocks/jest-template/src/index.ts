//Exercício 1
//a) Crie uma interface para representar os personagens:

export interface Character {
    name: string,
    life: number,
    defense: number,
    strength: number
}

//b) Crie uma função validateCharacter que valide as informações de um personagem (devolvendo true se for válida ou false)
//caso contrário). Nenhuma as propriedades pode ser vazia. Em relação à vida, defesa e força, elas só podem possuir valores
//maiores que 0.

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.life === undefined ||
        input.defense === undefined ||
        input.strength === undefined
    ) {
        return false
    }

    if (input.life <= 0 || input.defense <= 0 || input.strength <= 0) {
        return false
    }

    return true
}

//Exercício 3 - Agora, vamos implementar a função (performAttack) que represente o ataque
//de um personagem a outro. Ela deve receber dois parâmetros: attacker (atancante) e defender 
//(defensor) que são do tipo Character. 
//O comportamento dela deve ser: 
//- Caso algum dos personagens esteja inválido, a função deve indicar um erro: `Invalid Character`
//- Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
//- Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
//- Você deve fazer duas implementações dessas funções

//a) Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação

export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character");
    }

    if (validateCharacter(defender) > validateCharacter(attacker)) {
        defender.life -= attacker.strength - defender.defense
    }
}

//b) Implemente a função utilizando inversão de dependências

export const performAttack1 = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }
    if(validateCharacter(defender) > validateCharacter(attacker)) {
        defender.life -= attacker.strength - defender.defense
    }
}