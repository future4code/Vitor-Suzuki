export class Purchase {
    id?: string;
    user_id?: string;
    quantity: number;
    total: number;

    constructor(quantity: number, total: number, id?: string, user_id?: string) {
        this.id = id
        this.user_id = user_id
        this.quantity = quantity
        this.total = total
    }
}