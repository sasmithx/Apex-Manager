export class Item {
    itemId: string;
    itemName: string;
    price: number;
    quantity: number;

    constructor(itemId: string, itemName: string, price: number, quantity: number) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }
}