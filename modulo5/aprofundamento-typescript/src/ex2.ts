//Observe a função a seguir escrita em Javascript:

// function obterEstatisticas(numeros:any) {

//     const numerosOrdenados = numeros.sort(
//         (a:number, b:number) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros.
//R: As entradas e saídas serão números, mas não estou conseguindo tipar a lógica.

function obterEstatisticas(numeros): {a: number, b: number} {
    a: [5, 10, 15, 50, 85, 25]

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas.

//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abeixo, 
//temos um exemplo de objeto desse tipo, declarado em Javascript:

// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }

type amostraDeDados = {
    numeros: number,
    obterEstatisticas: number
}

const verAmostras: amostraDeDados = {
    numeros: 5,
    obterEstatisticas: 7
}
