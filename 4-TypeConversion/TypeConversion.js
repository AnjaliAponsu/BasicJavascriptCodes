///////////////////Type Conversion/////////////////////
/*Change the data type of a value to another data type.
      ex: String to number
          number to string
*/
let age = window.prompt("How old are you?");
age = Number(age); // Convert the string input to a number
age += 1;
console.log(`Your age next year will be: ${age}`, typeof age); // Output the age and its type


let a = "Pizza";
let b = "Rice";
let c = Boolean("Kottu");

a= String(a);
b = Number(b);

console.log(`a: ${a}`, typeof a);
console.log(`b: ${b}`, typeof b);
console.log(`c: ${c}`, typeof c);
