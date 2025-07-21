////////////////////////spread operator//////////////////////////
//represented by ... it allows an iterable such as array or string to be expanded into seperate elements(unpacks the element)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log("Maximum number : " + maximum);
console.log("Minimum number : " + minimum);

let userName = "Anjali Sewmini";

let letters = [...userName];
console.log(letters);

let Joinletters = [...userName].join(" ");

console.log(Joinletters);

//combind arreys
let fruits = ["apple", "banana"];
let veg = ["carrot", "potato"];

let foods = [...fruits, ...veg, "milk", "tomato"];
console.log(foods);