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
