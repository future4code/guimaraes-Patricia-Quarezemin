/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const boasVindas = "Boas vindas ao jogo de Blackjack!"
console.log(boasVindas)

let continuarJogo = true
if (confirm("Quer iniciar uma nova rodada?")) {

   console.log("O programa iniciará uma nova rodada!")

   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${somaUsuario}`)

   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()
   let somaComputador = cartaComputador1.valor + cartaComputador2.valor
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${somaComputador}`)

   if (somaUsuario > somaComputador) {
      console.log("O usuário ganhou!")
   } else if (somaComputador > somaUsuario) {
      console.log("O computador ganhou!")
   } else 
      console.log("Empate!")


} else {

   console.log("O jogo acabou!")
}


