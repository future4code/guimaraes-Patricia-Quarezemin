//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//R: Ao tipar a variável como string e, no resultado passar um número, dá erro o qual relata que não posso atribuir o tipo number com string

const minhaString: string = '86'

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, 
//como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: number | string = 2022
meuNumero: 'aliança'

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

type person = {
    nome: string,
    idade: number,
    corFavorita: string
}

const mamaePedro: person = {
    nome: 'Patrícia',
    idade: 35,
    corFavorita: 'coral'
}

const papaiPedro: person = {
    nome: 'Rafael',
    idade: 37,
    corFavorita: 'preto'
}

const nenemPedro: person = {
    nome: 'Pedro',
    idade: 1,
    corFavorita: 'a que a mamãe escolher'
}

//d) Modifique a propriedade corFavorita para que apenas seha possível escolher entre as cores do arco-íris. Utilize
//um enum para isso.

enum ListaDeCores {
    AZUL = 'azul',
    AMARELO = 'amarelo',
    VERMELHO = 'vermelho',
    VERDE = 'verde',
    ROXO = 'roxo',
    MARROM = 'marrom',
    LARANJA = 'laranja',
    ROSA = 'rosa'
}

const corFavoritaPerson = {
    corFavorita: ListaDeCores.ROSA
}
