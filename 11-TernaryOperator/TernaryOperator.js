///////////////////////////////Ternary Operator//////////////////////
// a shortcut to if{} and else{} statements. It helps to assign a variable based on a condition.
// condition ? codeIfTrue : codeIfFalse;

let age = 12;
let message = age >= 18 ? "You're an adult." : "You're a minor.";   //condition ? codeIfTrue : codeIfFalse;
console.log(message);

let salary = 5000;
let SaleryMessage = salary >=5000 ? "You want to pay tax." : "You don't want to pay tax.";
console.log(SaleryMessage);

let Amount = 1000;
let discount = Amount >= 500 ? `Discount = ${Amount * 0.2}` : "You don't have a discount";
console.log(discount);