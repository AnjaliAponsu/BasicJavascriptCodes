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
document.getElementById('paragraph2').textContent = `Age : ${Age}`;
document.getElementById('paragraph3').textContent = isStudent;


///////////////////////Arithmetic Operators/////////////////////
//Arithmatic operators are used to perform basic mathematical operations on numbers.

let Student = 20;
 
Student1 = Student + 10;           //Student += 10;   //Addition operator
Student2 = Student - 10;           //Student -= 10;   //Subtraction operator
Student3 = Student * 2;            //Student *= 2;    //Multiplication operator
Student4 = Student / 2;            //Student /= 2;    //Division operator
Student5 = Student ** 2;             //Student **= 2;   //Exponentiation operator 
let ExtraStudent = Student % 3;   //Student %= 3;    //Modulus operator

Student++;
//Student--;

console.log(`Arithmetic Operators Student1 Count: ${Student1}`);
console.log(`Arithmetic Operators Student2 Count: ${Student2}`);
console.log(`Arithmetic Operators Student3 Count: ${Student3}`);
console.log(`Arithmetic Operators Student4 Count: ${Student4}`);
console.log(`Arithmetic Operators Student5 Count: ${Student5}`);
console.log(`Arithmetic Operators ExtraStudent Count: ${ExtraStudent}`);

/* 
Operator precedence
1. Parentheses() 
2. Exponentiation
3. Multiplication and Division and Modulus
4. Addition and Subtraction
*/
let result1 = (2 + 3) * 4 - 5; // Parentheses have the highest precedence
console.log(`Operator Precedence results: ${result1}`); 