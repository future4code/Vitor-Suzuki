export class Ticket {
    id?: string;
    name: string;
    description: string;
    price: number;
    origin: string;
    destination: string

    constructor(name: string, description: string, price: number, origin: string, destination: string, id?: string) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.origin = origin
        this.destination = destination
    }
}