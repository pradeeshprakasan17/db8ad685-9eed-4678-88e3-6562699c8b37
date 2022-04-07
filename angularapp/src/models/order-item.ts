import { CartItem } from "./cart-item";

export class OrderItem {

    imageUrl: any;
    unitPrice: any;
    quantity: any;
    productId: any;

    constructor(cartItem: CartItem) {
        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.productId = cartItem.id;
    }
}
