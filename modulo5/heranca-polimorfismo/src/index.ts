import app from './app'

//Exercícios - Herança

//Exercício 1

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
   
    constructor(
        id: string,
        email: string,
        name: string,
        password: string
        
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
       
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return 'Olá, bom dia!'
    }
}

const User1 = new User('1', 'patricia@email.com', 'Patrícia', '123456')

console.log(`Id: ${User1.getId()}, email: ${User1.getEmail()}, nome: ${User1.getName()}`)

//a) Seria possível imprimir a senha (password) atrelada a essa instância?
//R: Não, pois não existe nenhum método (GETTERS) para retornar o password.

//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//R: 1 vez.

//Exercício 2

class Customer extends User {
    public purchaseTotal: number = 0
    private creditCard: string

    constructor(
        id: string,
        email: string,
        password: string,
        creditCard: string,
        purchaseTotal: number
    ) {
        super(id, email, password, creditCard)
        console.log('Chamando o construtor da classe Customer')
        this.creditCard = creditCard
        this.purchaseTotal = purchaseTotal
    }

    public getCreditCard(): string {
        return this.creditCard
    }

    public getPurchaseTotal(): number {
        return this.purchaseTotal
    }

}

const Costumer1 = new Customer('01', 'patricia@gmail', '123456', '8975855540690578', 5.000)

console.log(`Id ${Costumer1.getId()}, email: ${Costumer1.getEmail()}, total: ${Costumer1.getPurchaseTotal}`)

//a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
//R: 1 vez

//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
//R: 2 vezes

//Exercício 3
const Costumer2 = new Customer('02', 'Pedro', 'pedro@email.com', '7898521478651236', 300)
console.log(Costumer2)

//a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

//Exercício 4
//Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself
//("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm 
//acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, 
//faça com que a instância que você criou para a classe Customer chame esse método

const Customer1 = new Customer('01', 'patricia@gmail.com', '123456', '8975855540690578', 5000)
Customer1.introduceYourself()

console.log(Customer1)

//Não chamou o introduceYourself no terminal.

//Exercício 5
//Altere o método que você acabou de criar para que ele imprima a mensagem: "Olá, 
//sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores.


//Exercícios - Polimorfismo

//Exercício 1

export interface Client {
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    calculateBill(): number

}

const client: Client = {
    name: 'Rafael',
    registrationNumber: 4,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    },
}

console.log(client)
console.log(client.calculateBill())

//a)  Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
//R: Todas, somente a calculateBill que não foi impressa. Mas após dar o console.log em client.calculeBill() apareceu o 2 no terminal.

//Exercício 2

export abstract class Place {
    constructor(protected cep: string) {}

    public getCep(): string {
        return this.cep
    }
}

// const place = new Place ('79.032-422')
// console.log(place)

//a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
//R: O erro gerado foi: error TS2511: Cannot create an instance of an abstract class.

//b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
//R: Para criar uma instância de uma classe abstrata, precisamos declarar uma classe filha e criar uma instância dessa última.

//Exercício 3

// 3.1 - O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)
//R: Para criar uma instância de uma classe abstrata, precisamos declarar uma classe filha e criar uma instância dessa última.

//3.2) Por que a Place não é uma interface?
//R: Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

//3.3) Por que a classe Place é uma Classe Abstrata?
//R: Place é abstrata porquê não enxergamos uma situação em que seria necessário criar uma instância dessa classe. Neste caso específico o nosso

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        cep: string
    ) {
        super(cep)
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ) {
        super(cep)
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        cep: string
    ) {
        super(cep)
    }
}
