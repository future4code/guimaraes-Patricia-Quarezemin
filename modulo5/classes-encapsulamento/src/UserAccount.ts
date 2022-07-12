//Exercício 1

//a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
  //R: Para que as propriedades dentro da classe serem lidas ou, seus valores acessados, precisamos de um construtor que irá
  //executar as ações. E, chamamos ele por meio dos métodos (GETTERS ou SETTERS).

  //b) Copie o código abaixo para o exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você
  // quiser). Quantas vezes a mensagem "Chamando o constructor da classe User" foi impressa no terminal?
  //R: 

  //c) Como conseguimos ter acesso às propriedades privadas de uma classe?
  //R: Variáveis privadas só podem ser acessadas de dentro da própria classe e para isso usamos a keyword "this".

import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
    public getCpf():string {
      return this.cpf
    }

    public getName():string {
      return this.name
    }

    public getAge():number {
      return this.age
    }
  }

  const userList = new UserAccount('123.456.789-01', 'Pedro', 23)
  console.log(userList)

  