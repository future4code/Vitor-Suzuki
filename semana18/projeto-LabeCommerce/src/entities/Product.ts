export class Product {
    id?: string;
    name: string;
    description: string;
    price: number;

    constructor(name: string, description: string, price: number, id?: string) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
    }
}