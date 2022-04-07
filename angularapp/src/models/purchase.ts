
import { OrderItem } from './order-item';

export class Purchase {
    customer: any;
    shippingAddress: any;
    billingAddress: any;
    order: any;
    orderItems: OrderItem[]|any; 
}
