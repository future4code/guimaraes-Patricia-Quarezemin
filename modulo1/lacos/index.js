// Lacos

//Exercícios de interpretação de código

//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Resposta: O for é uma neira de escrita de laços e, sua utilidade é perdorrer os valores contidos em um array e, ele é lido
// até o implemento da condição! Assim que a condição é realizada, ele sai do loop (laço) e continua a leitura do código. Sobre
// o resultado no console será impresso o resultado da soma dos índices: 10.

//2. Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) O que vai ser impresso no console?
//Resposta: Os números maiores que 18, ou seja: 19, 21, 23, 25, 27, 30.

//Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado 
//para fazer isso?

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Resposta: *; **; ***; ****

//Exercícios de escrita de código

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console


let quantidadeBichoDeEstimacao = Number(prompt("Olá! Quantos bichos de estimação você tem?"))
let arrayBichosDeEstimacao = []

if (quantidadeBichoDeEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for (let i = 0; i < quantidadeBichoDeEstimacao; i++) {

        let nomeBichoDeEstimacao = prompt("Qual o nome deles?")
        arrayBichosDeEstimacao.push(nomeBichoDeEstimacao)
    } 
} 

console.log(arrayBichosDeEstimacao)

//2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, 
//crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
//a) Escreva um programa que imprime cada um dos valores do array original.
//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.

const arrayOriginal = [8, 12, 21, 18, 86, 16, 5, 85, 7, 11, 60, 6, 38, 19, 10, 89, 12, 9, 57]

//a)
const arrayOriginal = [8, 12, 21, 18, 86, 16, 5, 85, 7, 11, 60, 6, 38, 19, 10, 89, 12, 9, 57]
const imprimirArrayCadaValor = [arrayOriginal]
for(let numero of arrayOriginal){
    if(numero > 4)
    console.log(numero)
}

//b)
const arrayOriginal = [8, 12, 21, 18, 86, 16, 5, 85, 7, 11, 60, 6, 38, 19, 10, 89, 12, 9, 57]
const imprimirArrayDivididosPorDez = [arrayOriginal]
for(let numero of arrayOriginal){
    let divididoPorDez = numero/10
    console.log(divididoPorDez)
}

//c)
const arrayOriginal = [8, 12, 21, 18, 86, 16, 5, 85, 7, 11, 60, 6, 38, 19, 10, 89, 12, 9, 57]
const imprimirArrayPares= [arrayOriginal]
for(let numero of arrayOriginal){
    if(numero % 2 === 0){
        imprimirArrayPares.push(numero)
    }
}
console.log(imprimirArrayPares)

//d)
const arrayOriginal = [8, 12, 21, 18, 86, 16, 5, 85, 7, 11, 60, 6, 38, 19, 10, 89, 12, 9, 57]
const arrayStrings = [arrayOriginal]
for(let i=0; i < arrayOriginal.length; i++){
    console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]};`)
}

//e)
const arrayOriginal = [8, 12, 21, 18, 86, 16, 5, 85, 7, 11, 60, 6, 38, 19, 10, 89, 12, 9, 57]

const menorMaiorNumero = (array) =>{
    let menorNumero = Infinity
    let maiorNumero = 0

    for(let i = 0; i < arrayOriginal.length; i++){
        if(arrayOriginal[i] < menorNumero){
            menorNumero = arrayOriginal[i]
        }else if(arrayOriginal[i]> maiorNumero){
            maiorNumero = arrayOriginal[i]
        }
    }

    console.log(menorNumero)
    console.log(maiorNumero)
}