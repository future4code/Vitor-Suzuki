// -- EXERCÍCIO 1 - HERANÇA  -- //

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

    public getPassword(): string {
        return this.password;
    }

    public introduceYourself(): string {
        return (`Olá, sou ${this.name}. Bom dia!`)
    }
}

const Paulo = new User("111", "123@321.com", "Paulo", "1234");
console.log(Paulo.getPassword())


// -- EXERCÍCIO 2 - HERANÇA -- //

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const Mateus = new Customer('222', '111@222.com', 'Mateus', '321', '1233-4321-1234-6666')

// -- EXERCÍCIO 3 - HERANÇA -- //

// a) console.log(Mateus)
// b) console.log(Mateus.getPassword()). Conseguimos imprimir a senha, pois o método de pegar senha é público e está atrelado à User. Sendo Customer uma classe filha, ela 
// herda essa funcionalidade.


// -- EXERCÍCIO 4 -- HERANÇA -- // 

Mateus.introduceYourself()


// -- EXERCÍCIO 1 -- POLIMORFISMO -- //

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const newClient: Client = {
    name: 'Resid',
    registrationNumber: 1,
    consumedEnergy: 300,
    calculateBill() {
        return 2
    }
}

console.log(newClient)
// a) O método para retornar '2' será impresso apenas caso a função seja chamada, como em 'newClient.calculaBill()'. Ao tentar exibir tudo, o console mostra o objeto como 
// um todo. 


// -- EXERCÍCIO 2 -- POLIMORFISMO -- //

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// const Rio = new Place('11111111')

// -- EXERCÍCIO 3 -- POLIMORFISMO -- //

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}


