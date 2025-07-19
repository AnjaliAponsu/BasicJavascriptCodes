//////////////////////////////String Slicing/////////////////////////////////
//creating a substring from a portion of another string
//string.slice(start, end)

//if value has static number of characters you can use like this
const fullName = "Anjali Aponsu";
let FirstName = fullName.slice(0, 6);
console.log("First Name : " + FirstName);

let lastName = fullName.slice(7, 13);
console.log("Last Name : " + lastName);

let FirstCharacter = fullName.slice(0,1);
let LastCharacter = fullName.slice(-1);
let LastCharacters = fullName.slice(-6);

console.log("First character : "+ FirstCharacter);
console.log("Last Character : " + LastCharacter);
console.log("Last Characters : "+ LastCharacters);

//if not static number of characters, we can use this
const FullNameInput = document.getElementById("FullNameInput");
const submitFullName = document.getElementById("submitFullName");
const FirstNameLabel = document.getElementById("FirstNameLabel");
const LastNameLabel = document.getElementById("LastNameLabel");

submitFullName.onclick = function(){
    const FullNameValue = FullNameInput.value;
    const FistNameInput = FullNameValue.slice(0, FullNameValue.indexOf(" "));
    const LastNameInput = FullNameValue.slice(FullNameValue.indexOf(" "));
    FirstNameLabel.textContent = `Your first name : ${FistNameInput}`;
    LastNameLabel.textContent = `Your last name : ${LastNameInput}`;
}

////////////////////////////////
const email = "anjali@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log("Your user name is " + username);
console.log("The extension of the email is " + extension);

