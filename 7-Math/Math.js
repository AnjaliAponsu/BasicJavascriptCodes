//Math = build-in object that provides a collection of properties and methods

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045   
console.log(Math.SQRT2); // 1.4142135623730951

let x=10.24532;
let y=10.82234;



let z = Math.round(x+y); 
console.log("Z Value : " + z); 

x=Math.round(y); 
console.log("X Value : " + x);

let a=Math.floor(y); 
console.log("A Value : " + a);

let b=Math.ceil(y);
console.log("B Value : " + b);

let c = Math.trunc(y);
console.log("C Value : " + c);

let d = Math.pow(2, 3); // 2 raised to the power of 3
console.log("D Value : " + d);

let e = Math.sqrt(16); // square root of 16
console.log("E Value : " + e);

let f = Math.log(10); 
console.log("F Value : " + f);

let g = Math.sin(45);
console.log("G Value : " + g);

let h = Math.cos(45);
console.log("H Value : " + h);

let i = Math.tan(45);
console.log("I Value : " + i);

let j = Math.abs(-10); // absolute value
console.log("J Value : " + j);

let k = Math.sign(-10.673); // sign of the number
console.log("K Value : " + k);

let l = Math.max(10, 20, 30, 40); // maximum value
console.log("L Value : " + l);

let m = Math.min(10, 20, 30, 40); // minimum value
console.log("M Value : " + m);

//////////////////////Random Number Generation//////////////////////
let randomNum = Math.random(); // generates a random number between 0 and 1
console.log("Random Number: " + randomNum);

let randomfloor = Math.random() * 6; // generates a random integer between 0 and 99
console.log("Random Integer: " + randomfloor);

let randomInt = Math.floor(Math.random() * 100) + 9; // generates a random integer between 10 and 50
console.log("Random Integer: " + randomInt);

