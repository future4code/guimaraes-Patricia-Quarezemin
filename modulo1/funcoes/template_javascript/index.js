
//Exercícios de interpretação de código

//1. Leia o código abaixo

// function minhaFuncao(variavel) {
// return variavel * 5
// }

// console.log(minhaFuncao(2)) 
// console.log(minhaFuncao(10))  

//a. O que vai ser impresso no console?
// console.log(minhaFuncao(2)) - retorna 10 pq é o resultado da multiplicação de 2, 5
// console.log(minhaFuncao(2)) - retorna 50, pq é é o resultado da multiplicação de 5, 10

//b. O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)?
// O que apareceria no console?
//Resposta: daria erro, pois precisa do console.log para imprimir no terminal a função. No console não apareceria nada.

//2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é a sua utilidade.
//Resposta: Temos as funções toLowerCase que irá pegar o texto fornecido pelo usuário e colocar tudo em letra minúscula e,
// a segunda que é a includes responsável por verificar se o caractere cenoura é encontrado na string.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i. Eu gosto de cenoura - resposta: true
// ii. CENOURA é bom pra vista - resposta: true
// iii. Cenouras crescem na terra - resposta: true

// Exercícios de escrita de código

//1. Escreva as funções explicadas abaixo:
//a.A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// const imprimirMensagem = () => {    
//     console.log ("Eu sou Patrícia, tenho 35 anos, moro em Campo Grande e sou estudante.")

// }

// imprimirMensagem()

//b. Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma 
//string que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// const mensagemUnica = (nome, idade, cidade, profissao) => {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cid} e sou ${profissao}`)

// }

// mensagemUnica("Patrícia", 35, "Campo Grande", "estudante")

//2. Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
//Invoque a função e imprima no console o resultado.

// const soma = (n1, n2) => {
//     let resultado = (n1 + n2)
//     return resultado    
    
// }

// console.log(soma(8, 6))

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao 
//segundo.

// const numeros = (n3, n4) => {

//     return n3 >= n4
// }
// (numeros (6, 8))

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// const numeroPar = (n5) => {
    
//     return n5 % 2 === 0 
// }

// console.log(numeroPar(6))

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o 
//tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// const mensagemTamanho = (nome) => {
//     console.log(nome.length)
//     console.log(nome.toUpperCase())
// }

// mensagemTamanho("Tenho um cachorrinho chamado Ribinha!")

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça 
// para o usuário inserir dois números e chame essas 4 funções com esses valores imputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:

const soma = (n6, n7) => {
        
    return n6 + n7
}
    
const subtracao = (n6, n7) => {
    
    return n6 - n7
}
    
const multiplicacao = (n6, n7) => {

    return n6 * n7
}
    
const divisao = (n6, n7) => {
    
    return n6 / n7
}

let n6 = Number(prompt("Por favor, digite 1 número!"))
let n7 = Number(prompt("Agora, digite outro número!"))

console.log(soma (n6, n7))
console.log(subtracao(n6, n7))
console.log(multiplicacao(n6, n7))
console.log(divisao(n6, n7))




