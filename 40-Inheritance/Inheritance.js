/* Inheritance allows a new class to inherit properties and methods
   from an existing class. (parent -> child) helps with code reusability
   and organization.
*/

class Animal {
    alive = true;

    eat() {
        console.log(`the ${this.name} is eating.` );
    }
    sleep() {
        console.log(`the ${this.name} is sleeping.`);
    }
}
class Dog extends Animal {
    name = "dog";
    bark() {
        console.log("Barking...");
    }
}

class Cat extends Animal {
    name = "cat";
}
class Fish extends Animal {
    name = "fish";
}

const dog = new Dog();
console.log(dog.alive); // true
dog.eat(); 
dog.sleep();
dog.bark(); 

const cat = new Cat();
console.log(cat.alive); // true
cat.eat(); 
cat.sleep();

const fish = new Fish();
console.log(fish.alive); // true
fish.eat(); 
fish.sleep();

fish.alive = false;
console.log(fish.alive); // false