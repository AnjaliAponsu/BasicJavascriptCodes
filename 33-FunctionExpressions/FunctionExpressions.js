//function declaration = define a reusable block of code that perform a specific task.

function Hello(){
    console.log("Hello!");
}
Hello();
//fuction expressions = a wway to define functions as values or variables

/* 1. Callback in asynchronous operations
   2. Higher-order functions
   3. Closures
   4. Event listeners */

const hello = function(){
    console.log("Hello");
}
hello();

console.log("-------------------");

const number = [1, 2, 3, 4, 5, 6];
const squares = number.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);




setTimeout(function(){
    console.log("Hello, Im Anjali");
}, 3000);                            //take 3s to give the output


const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
const evenNumbers = number.filter(function(element){
    return element % 2 === 0;
});
const oddNumbers = numbers.filter(function(element){
    return element % 2 !==0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
    
});

console.log(square);
console.log(cubes);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(total);
