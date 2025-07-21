///////////////////////////////////Variable scope/////////////////////////////////
//where the variable is recognized and accessible (local and global)

//Local variable
function valueA(){
    let x = 5;
    console.log("Local x : " + x); 
}

function valueB(){
    let x = 7;               //cannot access valueA x value.bcoz its inside the valueA like a houses
    console.log("Local x : " + x);
}
valueA();
valueB();

//Global variable
let y = 8;

function valueC(){
    console.log("Global y : " + y);
}
function valueD(){
    console.log("Global y : " + y);
}
valueC();
valueD();

//combind global and local variables
let z = 8;

function valueE(){
    let z = 1;                  //give priority to local variable
    console.log("Global E : " + z);
}
function valueF(){
    let z = 6;
    console.log("Global F : " + z);
}
valueE();
valueF();
