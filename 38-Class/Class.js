/* class = (ES6 feature) provides a more structured and cleaner way to work
           with objects compared to traditional constructor functions
                 ex: static keyword, encapsulation, inheritance */
            
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product Name: ${this.name}, Price: Rs.${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.18; // 18% sales tax

const product1 = new Product('Shirt' , 2000.00);
const product2 = new Product('Pants' , 5000.00);
 
product1.displayProduct();
product2.displayProduct();

const total1 = product1.calculateTotal(salesTax);
const total2 = product2.calculateTotal(salesTax);

console.log(`Total Price (including tax) for ${product1.name}: Rs.${total1}`);
console.log(`Total Price (including tax) for ${product2.name}: Rs.${total2}`);