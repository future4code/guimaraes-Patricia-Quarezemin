/* Exercícios de interpretação de código
1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa. */

// a. let array
// console.log ('a. ', array)

// Resultado: undefined

// b. array = null
// console.log ('b. ', array)

// Resultado: null

// c. array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log ('c ', array.length)

// Resultado: 11

//  d. let i = 0
//  console.log ('d. ', array [i])

// Resultado: 3

//  e. array [i+1] = 19
//  console.log ('e. ', array)

// Resultado = [3, 19, 5, 6 ...]

// f. const valor = array [i+6]
// console.log ('f. ', valor)

// Resultado: 9


// 2. Leia o código abaixo com atenção

// const frase = prompt ("Digite uma frase")
// console.log (frase.toUpperCase (). replaceAll ("A", "I"), frase.length)

// Resultado = 27

// Exercícios de escrita de código

// 1° exercício

let nomeUsuario = prompt ("Olá! Qual o seu nome?")
let emailUsuario = prompt ("Qual seu email?")

console.log ("O email ", emailUsuario, "foi cadastrado com sucesso. Seja bem-vinda, " , nomeUsuario, "!")

// 2° exercício

//a. 
const comidasPreferidas = ["risoto", "estrogonofe", "cachorro quente", "lasanha", "guacamole"]

// //b.
console.log (comidasPreferidas)

console.log (`Essas são as minhas comidas preferidas
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)

// //c.

comidasPreferidas[1] = prompt ("Qual sua comida favorita?")
console.log (comidasPreferidas)

let comidasPreferidas2 = prompt ("Qual sua comida favorita?")

comidasPreferidas.splice (1, 1, comidasPreferidas2)

console.log (comidasPreferidas)

// 3° exercício

let listaDeTarefas = []

listaDeTarefas[0] = prompt ("Olá! Informe sua primeira tarefa do dia!")
listaDeTarefas[1] = prompt ("Informe sua segunda tarefa do dia!")
listaDeTarefas[2] = prompt ("Informe sua terceira e última tarefa do dia!")

console.log (listaDeTarefas)

let indice = prompt (`Digite o índice da tarefa que você já realizou: 0 para ${listaDeTarefas[0]},1 para ${listaDeTarefas[1]}, 2 para ${listaDeTarefas[2]}`)

listaDeTarefas.pop(indice)

console.log (listaDeTarefas[0], listaDeTarefas[1], listaDeTarefas[2] )





 
