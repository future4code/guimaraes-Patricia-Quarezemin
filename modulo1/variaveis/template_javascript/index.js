/*Exercícios de interpretação de código

1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log (b)

b = 5
console.log (a, b)

Neste primeiro exercício serão impressos os valores: 10 e 5, uma vez que a variável let pode sofrer alterações; antes era
10 e depois foi declarada 5

2. Analise o programa abaixo...

let a = 10
let b = 20
c = a
b = c
a = b

console.log (a, b, c)

Neste 2º exercício serão impressos os valores: 10; 10; 10

3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher
nomes significativos usar o padrão camelCase. Além disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt ("Quantas horas você trabalha por dia?")
Minha sugestão - let horasTrabalhoDia
let t = prompt ("Quanto você recebe por dia?")
Minha sugestão - let salarioDia
alert (´Você recebe ${t/p} por hora´)
Minha sugestão - alert (´Você recebe ${horasTrabalhoDia/salarioDia} por hora´)

Aqui, o comando prompt serve para interagir com o usuário, fazendo perguntas que, usando o comando console.log, ficarão 
impressas no console.
Já o alert fica piscando no navegador.*/

/*Exercícios de escrita de código*/

/*Exercício 1*/

let nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual é a sua idade?")

console.log (typeof nome)
console.log (typeof idade)

/*Reflita: por que esse tipo foi impresso?
Resposta: ambas informações foram impressas como string, pois a saída é no console, para que saísse como number, no caso da
idade, teria que fazer a conversão para Number ()*/ 

console.log ("Olá", nome, "você tem", idade, "anos.")

/*Exercício 2*/

let roupaColorida = prompt ("Você está usando roupa colorida? [S/N]")
let usaOculos = prompt ("Você usa óculos? [S/N]")
let terFilhos = prompt ("Você tem filhos? [S/N]")

console.log ("Você está usando roupa colorida?", roupaColorida)
console.log ("Você usa óculos?", usaOculos)
console.log ("Você tem filhos?", terFilhos)

/*Exercício 3*/

let a = 10
let b = 25

c = b
b = a
a = c

console.log (a, b, c)



