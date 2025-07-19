/////////////////////////////Method Chaining///////////////////////////
//Calling one method after another in one continuous line of code.

let userName = window.prompt("Enter your user name : ");

// No method chaining
userName = userName.trim();                 //Remove the space in start
let FirstChar = userName.charAt(0);         //Select first character
FirstChar = FirstChar.toUpperCase();        //First letter get upper case

let extraChar = userName.slice(1);         //select extra characters
extraChar = extraChar.toLowerCase();       //other characters give lower case

userName = FirstChar + extraChar;
console.log(userName);

///////////////////////Method chaining///////////////////////////
userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
console.log(userName);