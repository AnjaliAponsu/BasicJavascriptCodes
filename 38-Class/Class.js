/* class = (ES6 feature) provides a more structured and cleaner way to work
           with objects compared to traditional constructor functions
                 ex: static keyword, encapsulation, inheritance */
            
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }
}

const product1 = new Product('Shirt' , 2000.00);
product1.displayProduct();