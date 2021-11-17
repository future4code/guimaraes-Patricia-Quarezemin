// Exercício 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 - o resultado será false

// resultado = bool1 && bool2 && bool3 -  o resultado será false

// resultado = !resultado && (bool1 || bool2) - o resultado será true

// console.log ("d. ", typeof resultado) - o resultado será boolean

// Exercício 2

// let primeiroNumero = Number (prompt ("Digite um número!"))
// let segundoNumero = Number (prompt ("Digite outro número!"))

// const soma = primeiroNumero + segundoNumero

// console.log (soma)

// Resposta: Sim, o problema está na falta do comando Number (). Sem este comando, será impresso no console os 2 números
// digitados pelo usuário por exemplo: se foi digitado 5 e 4 aparecerá no console: 54 e, não a soma deles.

// Exercício 3

// Resposta: faltou o comando Number (), pois foi utilizado prompt e, este, se não colocado o primeiro, somente repetirá
// os números e, não fará a soma!

// Exercícios de escrita de código

// Exercício 1.

  let idadeUsuario = Number (prompt ("Qual é a sua idade?"))
  let idadeMelhorAmigo = Number (prompt ("Qual é a idade do(a) seu(sua) melhor amigo(a)?"))

  console.log (`Sua idade é maior do que a idade do(a) seu(sua) melhor amigo(a)? ${idadeUsuario > idadeMelhorAmigo}`)
  console.log (`A diferença entre nossas idades é de: ${idadeUsuario - idadeMelhorAmigo} ano!`)

//  // Exercício 2.

  let numeroPar = Number (prompt ("Por favor, insira um número par"))

  console.log (resultado = numeroPar % 2) 

// // Exercício 3.

  const idade = Number (prompt ("Quantos anos você tem?"))
  let anosMeses = idade / 12
  let anosDias = idade / 365
  let anosHora = idade / 24

 console.log (`Sua idade é: ${idade}, em meses é: ${anosMeses} em dias é: ${anosDias} e, em horas é: ${anosHora}`)

// Exercício 4.

const numero1 = Number (prompt ("Por favor, digite um número!"))
const numero2 = Number (prompt ("Digite outro número!"))
const numero3 = (numero1 % numero2)
const numero4 = (numero2 % numero1)


console.log ("O primeiro número é maior que o segundo?" , numero1 > numero2)
console.log ("O primeiro número é igual ao segundo?", numero1 == numero2)
console.log ("O primeiro número é dividível pelo segundo?", numero3 === 0)
console.log ("O segundo número é divisível pelo primeiro?", numero4 === 0)



