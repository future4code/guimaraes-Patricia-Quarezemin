// Exercícios de interpretação de código

//1. Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//a) Explique o que o código faz. Qual o teste que ele realiza?
//Resposta: Esse código está perguntando ao usuário que digite 1 número, caso o resto da divisão do número por 2 
//dessa operação seja igual a 0, será impresso no console: "passou no teste", por retornar o if (true), caso contrário 
//será impresso: "Não passou no teste", por retornar o 5else (false).

//b) Para que tipos de números ele imprime no console "Passou no teste"?
//Resposta: Para os números que são divisíveis por 2.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//Resposta: Para os números que não são divisíveis por 2.

//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
//Resposta: O switch case permite simplificar o if/else, e seleciona um dos muitos blocos de código a serem executados.
//Havendo correspondência, o bloco é executado; não havendo, vai para o próximo até que se execute algum.

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//Resposta: O preço da fruta maçã é R$2.25

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se 
//retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//Resposta: Nesta situação, o próximo caso seria executado (aqui seria impresso o preço 5) mesmo se a avaliação não corresponder
//ao caso.

//3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) O que a primeira linha está fazendo?
//Resposta: Implementando a condição se; se o número for >0 será impresso no console: "Esse número passou no teste"

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Resposta: Por ser número >0 será impresso no console: "Esse número passou no teste". Já no segundo caso, será impresso
//no console a mensagem: "mensagem is not defined"

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Resposta: Sim, pois a variável mensagem está dentro do escopo local e, para que ela seja impressa no console, o desenvolvedor
//deverá declará-la no escopo global.

//Exercícios de escrita de código

//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
//(apenas maiores de idade).

//a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
//imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

let idadeUsuario = Number(prompt("Olá! Quantos anos você tem?"))

const permissaoDirigir = () =>{
    if(idadeUsuario >= 18){
        console.log("Você pode dirigir")
    } else{
        console.log("Você não pode dirigir")
    }
}

permissaoDirigir()

//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou 
//V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o 
//bloco if/else

let turnoEstudoAluno = prompt("Você estuda em qual turno? Digite 'M' para matutino, 'V' para vespertino e, 'N' para noturno.")

const imprimirConsoleTurnoEstudo = () =>{
    if(turnoEstudoAluno === 'M'|| turnoEstudoAluno === 'm'){
        console.log("Bom dia!")
    }else if(turnoEstudoAluno ==='V'|| turnoEstudoAluno === 'v'){
        console.log("Boa tarde!")
    }else{
        console.log("Boa noite!")
    }
    
    }
    
    imprimirConsoleTurnoEstudo()

//3. Repita o ecercício anterior, mas utilizando a estrutura de switch case agora.

let turnoEstudoAluno = prompt("Você estuda em qual turno? Digite 'M' para matutino, 'V' para vespertino e, 'N' para noturno.")

switch (turnoEstudoAluno){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
        break
    default:
        console.log("Turno de aula intermediário")
}

//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele
// for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de
// filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar 
//assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let generoFilme = prompt("Olá! Qual é o gênero de filme que você irá assistir?")
let precoIngresso = prompt("Qual valor do ingresso?")

const verFilmeComigo = () =>{
    if(generoFilme === 'fantasia' && precoIngresso < 'R$ 15.00'){
        console.log("Bom filme!")
    }else{
        console.log("Escolha outro filme :(")
    }    
}
verFilmeComigo()

//Desafios

//1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao 
//usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens 
//"Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

let generoFilme = prompt("Olá! Qual é o gênero de filme que você irá assistir?")
let precoIngresso = prompt("Qual valor do ingresso?")

const verFilmeComigo = () =>{
    if(generoFilme === 'fantasia' && precoIngresso < 'R$ 15.00'){
        let comprarSnack = prompt("Qual snack você vai comprar?")
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${comprarSnack}!`)

    }else{
        console.log("Escolha outro filme :(")
    }    
}
verFilmeComigo()

//2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, 
//o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

//O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, 
//junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso 
//multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
//Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados 
//pelo valor do dólar (considerar o dólar = R$4,10)

let nomeUsuario = prompt("Qual seu nome completo?")
let tipoJogo = prompt("Qual é o jogo que você irá assistir? Digite 'IN' para ver Internacional ou 'DO' para Doméstico")
let etapaJogo = prompt("Qual a etapa? Digite 'SF' para semi-final; 'DT' para decisão de 3º lugar ou 'FI' para final.")
let categoria = prompt("Qual a categoria? 1, 2, 3 ou 4?")
let quantidadeIngressos = prompt("Qual a quantidade de ingressos que você irá comprar?")

const valorIngressoDomesticoSemiFinal1 = 'R$ 1.320.00'
const valorIngressoDomesticoSemiFinal2 = 'R$ 880.00'
const valorIngressoDomesticoSemiFinal3 = 'R$ 550.00'
const valorIngressoDomesticoSemiFinal4 = 'R$ 220.00'

let comprarIngressoDomesticoSemi1 = valorIngressoDomesticoSemiFinal1 * quantidadeIngressos
let compraringressoDomesticoSemi2 = valorIngressoDomesticoSemiFinal2 * quantidadeIngressos
let comprarIngressosDomesticoSemi3 = valorIngressoDomesticoSemiFinal3 * quantidadeIngressos
let comprarIngressosDomesticoSemi4 = valorIngressoDomesticoSemiFinal4 * quantidadeIngressos

const valorIngressoDomesticoDecisaoTerceiroLugar1 = 'R$ 660.00'
const valorIngressoDomesticoDecisaoTerceiroLugar2 = 'R$ 440.00'
const valorIngressoDomesticoDecisaoTerceiroLugar3 = 'R$ 330.00'
const valorIngressoDomesticoDecisaoTerceiroLugar4 = 'R$ 170.00'

let comprarIngressoDomesticoTerceiroLugar1 = valorIngressoDomesticoDecisaoTerceiroLugar1 * quantidadeIngressos
let comprarIngressoDomesticoTerceiroLugar2 = valorIngressoDomesticoDecisaoTerceiroLugar2 * quantidadeIngressos
let comprarIngressoDomesticoTerceiroLugar3 = valorIngressoDomesticoDecisaoTerceiroLugar3 * quantidadeIngressos
let comprarIngressoDomesticoTerceiroLugar4 = valorIngressoDomesticoDecisaoTerceiroLugar4 * quantidadeIngressos

const valorIngressoDomesticoFinal1 = 'R$ 1.980.00'
const valorIngressoDomesticoFinal2 = 'R$ 1.320.00'
const valorIngressoDomesticoFinal3 = 'R$ 880.00'
const valorIngressoDomesticoFinal4 = 'R$ 330.00'

let comprarIngressoFinal1 = valorIngressoDomesticoFinal1 * quantidadeIngressos
let comprarIngressoFinal2 = valorIngressoDomesticoFinal2 * quantidadeIngressos
let comprarIngressoFinal3 = valorIngressoDomesticoFinal3 * quantidadeIngressos
let comprarIngressoFinal4 = valorIngressoDomesticoFinal4 * quantidadeIngressos

const valorIngressoInternacionalSemiFinal1 = 'U$ 5.412.00'
const valorIngressoInternacionalSemiFinal2 = 'U$ 3.608.00'
const valorIngressoInternacionalSemiFinal3 = 'U$ 2.255.00'
const valorIngressoInternacionalSemiFinal4 = 'U$ 902.00'

let comprarIngressoInternacionalSemi1 = valorIngressoInternacionalSemiFinal1 * quantidadeIngressos
let comprarIngressoInternacionalSemi2 = valorIngressoInternacionalSemiFinal2 * quantidadeIngressos
let comprarIngressoInternacionalSemi3 = valorIngressoInternacionalSemiFinal3 * quantidadeIngressos
let comprarIngressoInternacionalSemi4 = valorIngressoInternacionalSemiFinal4 * quantidadeIngressos

const valorIngressoInternacionalDecisaoTerceiroLugar1 = 'U$ 2.706.00'
const valorIngressoInternacionalDecisaoTerceiroLugar2 = 'U$ 1.804.00'
const valorIngressoInternacionalDecisaoTerceiroLugar3 = 'U$ 1.353.00'
const valorIngressoInternacionalDecisaoTerceiroLugar4 = 'U$ 697.00'

let comprarIngressoInternacionalTerceiro1 = valorIngressoInternacionalDecisaoTerceiroLugar1 * quantidadeIngressos
let comprarIngressoInternacionalTerceiro2 = valorIngressoInternacionalDecisaoTerceiroLugar2 * quantidadeIngressos
let comprarIngressoInternacionalTerceiro3 = valorIngressoInternacionalDecisaoTerceiroLugar3 * quantidadeIngressos
let comprarIngressoInternacionalTerceiro4 = valorIngressoInternacionalDecisaoTerceiroLugar4 * quantidadeIngressos

const valorIngressoInternacionalFinal1 = 'U$ 8.118.00'
const valorIngressoInternacionalFinal2 = 'U$ 5.412.00'
const valorIngressoInternacionalFinal3 = 'U$ 3.608.00'
const valorIngressoInternacionalFinal4 = 'U$ 1.353.00'

let comprarIngressoInternacionalFinal1 = valorIngressoInternacionalFinal1 * quantidadeIngressos
let comprarIngressoInternacionalFinal2 = valorIngressoInternacionalFinal2 * quantidadeIngressos
let comprarIngressoInternacionalFinal3 = valorIngressoInternacionalFinal3 * quantidadeIngressos
let comprarIngressoInternacionalFinal4 = valorIngressoInternacionalFinal4 * quantidadeIngressos


console.log(`----------Dados da compra----------
Nome do cliente: ${nomeUsuario}
Tipo de jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de Ingressos ${quantidadeIngressos}
----------Valores----------
Valor do Ingresso: R$ ${valorIngressoDomesticoFinal1}
Valor Total: R$ ${comprarIngressoFinal1}`)
