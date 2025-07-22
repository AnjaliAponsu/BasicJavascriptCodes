//Callback is a function that is passed as an argument to another function.

/*Used to handle asynchronous operations:
    1. Reading a file
    2. Network requests
    3. Interacting with databases */

function hello(callback){
    console.log("Hello buddy! ");
    callback();
}
function goodbye(){
    console.log("Good bye buddy! ")
}
hello(goodbye);

console.log("-----------------------");

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function display(result){
    console.log(result);
}

function displayResultInPage(result){
    document.getElementById("resultdisplay").textContent =`Result of the x and y is ` + result;
    console.log(result);
}

sum(displayResultInPage, 4, 7);