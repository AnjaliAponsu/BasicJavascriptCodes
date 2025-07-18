/////////////////////////////Const///////////////////////////
//const = a variable that can't be changed or reassigned.
 
const pi = 3.14; 
let radius;
let circumference;

//pi = 435; // This line will cause an error because pi is a constant and cannot be reassigned

//radius = window.prompt("Enter the radius of a circle");
//radius = Number(radius); // Convert the string input to a number
//circumference = 2 * pi * radius;

document.getElementById("RadiusSubmit").onclick = function(){
    radius = document.getElementById("Radius").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("circumference").textContent = `Circumference of the circle is: ${circumference}`+ 'cm'; // Display the circumference in the HTML element

}

console.log(`Circumference of the circle is: ${circumference}`, typeof circumference); // Output the circumference and its type