//Get output in inspect-> console
console.log("Hello, World!"); 

//Popup alert message
window.alert(`This is an alert message!`);

//Print output using id (Whatever add data within html code, that gives priority within here given data related that id)
document.getElementById("Heading").textContent = "Hello";
document.getElementById("Description").textContent = "Hy there! im anjali aponsu";

/////////////////////Variables///////////////////
//Variable = a container for storing data values. Behaves as if were the value it contains.
//2 types of variables
//     1. declaration          let x;
//     2. assignment         x = 100;

let x;    //variable name always want to unique
x= 100;
console.log(`variable x: ${x}`);

let name = 'Anjali';
console.log(typeof name);   //can get a output type
console.log(`Your name is ${name}  `);
  

let FullName = "Anjali Aponsu";
let Age = 20;
let isStudent = true;  //boolean value

document.getElementById('paragraph1').textContent = `Full Name: ${FullName}`;
document.getElementById('paragraph2').textContent = Age;
document.getElementById('paragraph3').textContent = isStudent;


///////////////////////Arithmetic Operators/////////////////////
//Arithmatic operators are used to perform basic mathematical operations on numbers.

let Student = 20;
 
//Student = Student + 10;           //Student += 10;   //Addition operator
//Student = Student - 10;           //Student -= 10;   //Subtraction operator
//Student = Student * 2;            //Student *= 2;    //Multiplication operator
//Student = Student / 2;            //Student /= 2;    //Division operator
//Student = Student ** 2;             //Student **= 2;   //Exponentiation operator 
//let ExtraStudent = Student % 3;   //Student %= 3;    //Modulus operator

Student++;
//Student--;

console.log(`Arithmetic Operators Student Count: ${Student}`);

/* 
Operator precedence
1. Parentheses() 
2. Exponentiation
3. Multiplication and Division and Modulus
4. Addition and Subtraction
*/
let result = (2 + 3) * 4 - 5; // Parentheses have the highest precedence
console.log(`Operator Precedence results: ${result}`); 

///////////////////////Accepting user input///////////////////////
/*
How to accept user input in JavaScript?
       1. Easy way = window prompt
       2. Professional way = HTML textbox
*/

//1. Easy way to accept user input
let userName;
userName = window.prompt ("What is your name?"); //window prompt is used to accept user input
console.log(`User Name: ${userName}`);

//2. Professional way to accept user input
document.getElementById("UserInputsubmitButton").onclick = function(){     // When the button is clicked, this function will be executed
    userName = document.getElementById("UserName").value;
    document.getElementById("Heading").textContent = `Hello, ${userName}!`;  // Update the heading with the user's name
}

///////////////////Type Conversion/////////////////////
/*Change the data type of a value to another data type.
      ex: String to number
          number to string
*/


