//O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham 
//presencialmente ou por home office:

[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

//Considerando o array acima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, 
//crie uma função que receba este array como parâmetro e retorne apenas as pessoas do setor de marketing que 
//trabalham presencialmente.

enum SetoresEmpresa {
    MARKETING = 'Marketing',
    VENDAS = 'Vendas',
    FINANCEIRO = 'Financeiro'
}

type pessoaColaboradora = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

function recursosHumanos () {

}