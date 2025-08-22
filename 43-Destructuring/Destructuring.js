/* Destructuring is a extract values from arrays and objects, then assign them to variables in a convenient way
   [] = to perform array destructuring
   {} = to perform object destructuring
*/

//--------Swap the value of 2 variables
let x = 5;
let y = 10;
[ x , y ] = [ y , x ];

console.log(x);
console.log(y);