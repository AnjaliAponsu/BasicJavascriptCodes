///////////////////////////////////Equality Operators/////////////////////////////////////
//   =   Assignment operator
//   ==  Comparison operator (compare if values are equal)
//   === Strict equality operator (Compare if values & datatype are equal)
//   !=  Inequality operator
//   !== Strict inequality operators

const PI = 3.14;

if(PI == "3.14") {
    console.log("Agree to the Comparison operator.")
}else{
    console.log("That is not PI.")
}

if(PI === 3.14) {      //check data type also
    console.log("Agree to the Strict equality operator.")
}else{
    console.log("That is not PI.")
}

if(PI != "3.14") {      
    console.log("It is not PI. Agree to the Inequality operator.")
}else{
    console.log("That is not PI.")
}

if(PI !== 3.14) {      //check data type also
    console.log("It is not PI. Agree to the Strict inequality  operator.")
}else{
    console.log("That is not PI.")
}