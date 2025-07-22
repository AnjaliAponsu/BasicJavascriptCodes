
function generatePassword(length, includeLowrcase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password ="";

    allowedChars += includeLowrcase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    console.log(allowedChars);
    if (length <=0){
        return `(Password lenght must be at least 1.)`;
    }
    if(allowedChars.length ===0){
        return `(At least 1 set of character need to be selected.)`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}
const passwordLenght = 12;
const includeLowrcase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, includeLowrcase, includeUppercase, includeNumbers, includeSymbols)
console.log(`Generated password : ${password}`)