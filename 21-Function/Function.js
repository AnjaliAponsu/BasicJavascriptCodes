///////////////////////Function///////////////////////////////
//function is a section of reusable code. Declare code once, use it whenever you want. Call the fuction to execute that code.

function animals(name, numOfLegs){
    console.log(`Animal name is ${name} and it have ${numOfLegs} legs.`);
}
animals("dog", 4);
animals("parrot", 2);
animals("Cat", 4);

console.log("--------------------")
function add(x, y){
    let result = x + y;
    return result;
}
console.log("Sum of x and y is " + add(7,10));
function subtract(x,y){
    return x-y;
}
console.log("subtract of x and y is " + subtract(7,10));

function isEven(number){
    return number % 2 === 0 ? true : false;
}
console.log("Is 2 Even number :" + isEven(2));
console.log("Is 5 Even number :" +isEven(5));
 
console.log("---------------");

function isValidEmail(email){
    return email.includes("@") ? true : false; 
}
console.log("Is anja@gmail.com currect email :" + isValidEmail("anja@gmail.com"));
console.log("Is anjagmail.com currect email :" + isValidEmail("anjagmail.com"));

