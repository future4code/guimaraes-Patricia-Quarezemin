// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const mensagem = prompt ("Digite a altura do retângulo!")
  const mensagem2 = prompt ("Agora, digite a largura do retângulo!")
  const resultado = (mensagem * mensagem2)

  console.log(resultado)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAgora = prompt ("Por favor, digite o ano atual!")
  let anoNascimento = prompt ("Agora digite o ano do seu nascimento!")
  let resultado1 = (anoAgora - anoNascimento)

  console.log(resultado1)
  

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  let IMC = peso / (altura * altura)

  return (IMC)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nomeUsuario = prompt ("Olá! Qual seu nome?")
  let idadeUsuario = Number (prompt ("Qual sua idade?"))
  let emailUsuario = prompt ("Qual seu email?")
  
  console.log (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas1 = prompt ("Qual sua cor favorita?")
  const coresFavoritas2 = prompt ("Qual sua segunda cor favorita?")
  const coresFavoritas3 = prompt ("Terceira cor favorita")
  
  const cores = [coresFavoritas1, coresFavoritas2, coresFavoritas3]

  console.log (cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

string: ("Paty")

return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let primeiraPalavra = string1.length
  let segundaPalavra = string2.length

  return primeiraPalavra === segundaPalavra
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  var ultimo = array[array.length - 1]

  return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 const first  = array[0]
 const last = array[array.length -1]

 array[0] = last
 array[array.length -1] = first

 return array

   
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  let string1Maiuscula = string1.toUpperCase()
  let string2Maiuscula = string2.toUpperCase()
  
  return string1Maiuscula === string2Maiuscula

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
  const anoRg = Number(prompt("Em que ano seu RG foi emitido?"))

  const renovar5Anos = ("<=20")
  const renovar10Anos = ("> 20 & = 50")
  const renovar15Anos = ("< 50")

  console.log(renovar5Anos, renovar10Anos, renovar15Anos)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}