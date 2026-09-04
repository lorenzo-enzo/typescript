/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */


type Product = {
    code: string;
    name: string;
    unitPrice: number;
    quantity: number;
    isFreeShipping: boolean;
}

// 2. ini nyimpen semua data produk ke dalam satu koleksi (Array)
const shoppingCart: Product[] = [
    { code: "KB001", name: "Mechanical Keyboard", unitPrice: 850000, quantity: 1, isFreeShipping: true },
    { code: "MS002", name: "Wireless Mouse", unitPrice: 275000, quantity: 2, isFreeShipping: true },
    { code: "HD003", name: "External SSD 1TB", unitPrice: 1650000, quantity: 1, isFreeShipping: false },
    { code: "HP004", name: "Gaming Headset", unitPrice: 720000, quantity: 1, isFreeShipping: true }
];

console.table(shoppingCart);
