// ----- EXERCÍCIO 1:


// --   a) Dentro de classes, o construtor serve para definir ações que serão executadas ao criar uma instância da classe. Para chamá-lo, usa-se "constructo()" na classe declarada e
//    "this" para referenciar. 

// --   b) A mensagem foi impressa uma vez.
class UserAccount {
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

}

const instance = new UserAccount('111.222.333-12', 'Paulo', 33);

// -- c) Para acessar propriedades privadas, antes criamos uma função pública "getter" que referencia a propriedade desejada. Em seguida, apenas chamamos tal função.


// ----- EXERCÍCIO 2:


class Transaction {
    private description: string;
    private value: string;
    private date: string;

    constructor(
        description: string,
        value: string,
        date: string,
    ) {
        this.description = description;
        this.value = value;
        this.date = date
    }

    public getDescription() {
        return this.description
    };
    public getValue() {
        return this.value
    }
    public getDate() {
        return this.date
    }
}


// ----- EXERCÍCIO 3:


class Bank {
    private accounts: string;
    
    constructor(accounts: string) {
        this.accounts = accounts
    }

    public getAccounts() {
        return this.accounts
    }
}



