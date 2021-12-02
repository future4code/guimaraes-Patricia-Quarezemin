// Funções de Array - Exercícios

//Exercícios de interpretação de código

//1. Leia o código abaixo:

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//a) O que vai ser impresso no console?
//Resposta: Trata-se da função map e, ela retorna algum valor e no caso específico, ela retornará o nome (item), o apelido
//(index) e, a posição do array (array). Tal função também é utilizada caso o desenvolvedor deseja criar um novo array baseado
//nas informações constantes do array original. Lembrando que o array novo terá o mesmo tamanho do original.

//2. Leia o código abaixo:

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)

//a) O que vai ser impresso no console?
//Resposta: Trata-se da mesma função que a questão anterior e, neste caso irá ser impresso no console somente o nome (item),
//conforme podemos verificar no return da função novoArrayB.

//3. Leia o código abaixo:

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)

//a) O que vai ser impresso no console?
//Resposta:Neste exercício a função trazida foi o filter e, este também pode ser utilizado pelo desenvolvedor para criar um novo array,
//porém a diferença é que neste você pode filtrar (ou não) algum parâmetro que ele não queira imprimir na função. Outra informação
//importante é que neste o tamanho do novo array pode ser igual ou menor que o original.
//Será impresso no console somente os nomes Amanda Rangel e seu apelido Mandi e, Laís Petra e, seu apelido Laura.

//Exercícios de Escrita de código

//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as 
//funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomePets = pets.map((item, index, array) =>{
    return item.nome
})
console.log(nomePets)

//b) Crie um novo array apenas com os cachorros salsicha

const petsSalsicha = pets.filter((item, index, array) =>{
    return item.raca === "Salsicha"
})
console.log(petsSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: 
//"Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const petsPoodles = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})

const mensagemClientesPoodles = petsPoodles.map((item, index, array) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
console.log(mensagemClientesPoodles)

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array 
//map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// // //a) Crie um novo array que contenha apenas o nome de cada item

const nomeProdutos = produtos.map((item, index, array) =>{
    return item.nome
})
console.log(nomeProdutos)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const aplicarDesconto = produtos.map((item, index, array) =>{
    let descontoPreco = (item.preco * 5) / 100
    let descontoPreco2 = item.preco - descontoPreco
    
    return `O novo valor do produto ${item.nome} com desconto é de R$ ${descontoPreco2}`
})

console.log(aplicarDesconto)


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const bebidasProdutos = produtos.filter((item, index, array) =>{
    return item.categoria === "Bebidas"
})
console.log(bebidasProdutos)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const objetosComPalavraYpe = produtos.filter((item, index, array) =>{
    if(item.nome.includes("Ypê"))
    return true
})
console.log(objetosComPalavraYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos 
//itens cujo nome contenha a palavra "Ypê"

const mensagemProdutosYpe = produtos.filter((item, index, array) =>{
    if(item.nome.includes("Ypê"))
    return true
})

const imprimirMensagemProdutosYpe = mensagemProdutosYpe.map((item, index, array) =>{
    return `Compre ${item.nome} por preco ${item.preco}`
})
console.log(imprimirMensagemProdutosYpe)

