// Exercícios de interpretação de código

// 1º exercício
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador
// **para analisar e pensar sobre o resultado.**

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
// Resposta: no primeiro console.log, o resultado será "Matheus Nachtergaele"; no segundo, será impresso a última pessoa do
// elenco: "Virginia Cavendish" e, no último console.log terá como resultado: "Globo", horário: "14h".

// 2º exercício
// Leia o código abaixo:

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?
// Resposta: no primeiro console.log será impresso: nome: "Juca", idade: 3, raca: "SRD"; no segundo, terá como resultado:
// nome: "Juba", idade: 3, raca: "SRD" e, no último console.log, será impresso: nome: "Jubo", idade: 3, raca: "SRD".
//
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Resposta: trata-se do espelhamento ou spread, o qual permite que expressões expandam o conteúdo de arrays, objetos, em
// locais onde múltiplos elementos são esperados, ou seja, serve para criar um objeto novo a partir de um objeto existente.

// 3º exercício
// Leia o código abaixo:
//
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console? b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Resposta: no primeiro console.log será impresso o booleano false e, no segundo, terá como resultado undefined, pois tal
// variável não foi atribuída nenhum parâmetro.

// Exercícios de escrita de código

//1. Resolva os passos a seguir:
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá 
// exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem 
// no modelo abaixo:

// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

/* const pessoa = {
    nome: "Rafael",
    apelidos: ["urelha", "Bill", "Blasques"]
}

const imprimirMensagemNoConsole = () =>{
    const frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
    
    return frase
}

// console.log (imprimirMensagemNoConsole ())

// // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista 
// // de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novosApelidos = {
    ...pessoa,
    apelidos1: ["Zafarrel", "lindo", "Rafa"],
   }

   const novaFrase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novosApelidos.apelidos1[0]}, ${novosApelidos.apelidos1[1]} ou ${novosApelidos.apelidos1[2]}`)

   console.log (novaFrase)

//2. Resolva os passos a seguir:

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

const pessoaFavorita1 = {
    nome: "Lúcia",
    idade: 61,
    profissão: "pedagoga"
}

const pessoaFavorita2 = {
    nome: "Leadro",
    idade: 33,
    profissão: "vendedor"
}

const pessoasFavoritas = (pessoaFavorita1, pessoaFavorita2) => {
    return pessoaFavorita1, pessoaFavorita2
}

//3. Resolva os passos a seguir:

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as 
//seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de 
// carrinho. Invoque essa função passando os três objetos criados.
// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos

const carrinho = []

const frutasSacolao1 = {
    nome: "morango",
    disponibilidade: true
}

const frutasSacolao2 = {
    nome: "acerola",
    disponibilidade: true
}

const frutasSacolao3 = {
    nome: "amora",
    disponibilidade: true
}

const todasFrutasSacolao = () =>{

    carrinho.push(`nome: ${frutasSacolao1.nome}, disponibilidade: ${frutasSacolao1.disponibilidade}`)
    carrinho.push(`nome: ${frutasSacolao2.nome}, disponibilidade: ${frutasSacolao2.disponibilidade}`)
    carrinho.push(`nome: ${frutasSacolao3.nome}, disponibilidade: ${frutasSacolao3.disponibilidade}`)

    return carrinho

}
todasFrutasSacolao()
console.log(todasFrutasSacolao()) */

// Desafios

//1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto 
//com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

/* const informacoesUsuario = (nome, idade, porofissao) =>{
    let nomeUsuario = prompt ("Olá! Qual seu nome?")
    let idadeUsuario = prompt ("Qual sua idade?")
    let profissaoUsuario = prompt ("Qual sua profissão?")

    let fraseConsole = (nomeUsuario, idadeUsuario, profissaoUsuario)
    
    console.log (`nome:Paty ${nomeUsuario}, profissão: ${profissaoUsuario} idade: ${idadeUsuario}`)

    return informacoesUsuario
}

informacoesUsuario()
console.log(fraseConsole)
console.log(typeof fraseConsole) */

//2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento 
//e nome. A função deve retornar uma mensagem no seguinte modelo:
//O primeiro filme foi lançado antes do segundo? false
//O primeiro filme foi lançado no mesmo ano do segundo? true

/* const filmes = {
    anoDeLancamento: 2010,
    nome: "Meu Malvado Favorito"
} */
