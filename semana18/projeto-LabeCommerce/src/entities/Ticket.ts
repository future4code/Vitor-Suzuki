import { Product } from "./Product";

export class Ticket extends Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    origin: string;
    destination: string

    constructor(name: string, description: string, price: number, origin: string, destination: string, id?: string) {
        super(name, description, price)
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.origin = origin
        this.destination = destination
    }
}