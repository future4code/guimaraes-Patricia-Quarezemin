//Observe a função a seguir escrita em Javascript:

// function obterEstatisticas(numeros) {

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
//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas.
//R: As entradas e saídas serão números, mas não estou conseguindo tipar a lógica.

function obterEstatisticas(numeros : number[]) :Estatistica{
    
    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abeixo, 
//temos um exemplo de objeto desse tipo, declarado em Javascript:

// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas
// }

type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros : number[]) => Estatistica
}
