// arrow function is a concise way to write function expressions good for simple functions that you use only once
// (parameter) => some code

//before we write code
const hello = function(){
    console.log("Hello");
}
hello();
//use arrow function
const hey = () => console.log("Hey");
hey();

//----------------
const Name = (name, age) => {console.log(`hello ${name}`)
                             console.log(`You are ${age} years old.`)};
Name("Anjali", 24);


//----------------
const numbers = [1, 2, 3, 4, 5, 6, 7];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const isEven = numbers.filter((element) => element % 2 === 0 );
const isOdd = numbers.filter((element) => element % 2 !== 0 );
const total = numbers.reduce((accumulator, element) => accumulator + element );

console.log(squares);
console.log(cubes);
console.log(isEven);
console.log(isOdd);
console.log(total);

//----------------
setTimeout( () => console.log("Hello world"), 3000);

