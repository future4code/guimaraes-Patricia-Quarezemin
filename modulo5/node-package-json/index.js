// Exercícios propostos

// Exercício 1

//a) A propriedade process.argv é uma interface nativa do node e que é usada para obter os argumentos passados na linha
//de comando.

//b)
const nome = process.argv[2];
const idade = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c)
const idadeFutura = idade + 7

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}.`)

//Exercício 2

const num1 = process.argv[2]
const num2 = process.argv[3]

// console.log(`Soma: ${num1 + num2}.`)
// console.log(`Subtração: ${num1 - num2}.`)
// console.log(`Multiplicação: ${num1 * num2}.`)
// console.log(`Divisão: ${num1 / num2}.`)

//Exercício 3

const listaTarefas = process.argv[2]

