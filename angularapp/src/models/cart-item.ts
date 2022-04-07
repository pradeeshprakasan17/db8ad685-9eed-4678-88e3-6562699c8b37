import { Product } from "./product"; 

export class CartItem {
    id: any;
    name: any;
    imageUrl: any;
    unitPrice: any;
    quantity: any;

    constructor(product: Product) {
        this.id = product.id;
        this.name = product.product_name;
        this.imageUrl = product.product_img;
        this.unitPrice = product.product_price;
        this.quantity = 1;
    }
}
