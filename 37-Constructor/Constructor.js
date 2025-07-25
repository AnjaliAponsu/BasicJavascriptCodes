/* Constructor is a special method for defining the properties and methods of object*/

function car(brand, color, year){
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.drive = function(){console.log(`you drive a ${brand} brand car.`)}
}

const car1 = new car("brandA", "colorA", 2024);

console.log(car1.brand);
console.log(car1.color);
console.log(car1.year);
car1.drive();
