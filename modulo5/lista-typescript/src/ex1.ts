//Crie uma função que receba uma string com o nome e outra string com uma data de nascimento (ex.: '24/04/1993'). A função deve separar o dia, o mês e ano e retornar uma string no seguinte
//formato: "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}". 

const nome: string = 'Patrícia'
const dataDeNascimento: string = '18/08/1986'
const split = dataDeNascimento.split('/', 1)
const splitMes = dataDeNascimento.split('18/1986')
const splitAno = dataDeNascimento.split('18/08/')

console.log(`Olá me chamo ${nome}, nasci no dia ${split} do mês ${splitMes} do ano de ${split}.`)