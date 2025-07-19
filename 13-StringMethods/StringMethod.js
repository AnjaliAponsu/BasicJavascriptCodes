//////////////////////////String Methods//////////////////////////
// string method allow you to manipulate and work with text (Strings)
let userName = "   Hello World ";
let FirstName = " Anjali";

console.log(userName.charAt(0));          //place 0 character (0=H, 1=e, 2=l, 3=l, 4=o,... like)
console.log(userName.indexOf("o"));       //place number of 'o' charecter
console.log(userName.lastIndexOf("o"));   //place number of last 'o' character
console.log(userName.length);

console.log(userName)                     //before trim
userName = userName.trim();               //trim remove the spaces 
console.log(userName);                    //after trim

console.log(userName.toUpperCase());      //all characters gives upper case
console.log(userName.toLowerCase());       //all characters give lower case

console.log(userName.repeat(3));          //repeat value in 3 times



let StartResult = FirstName.startsWith(" ");

if(StartResult){
    console.log(`Your name(${FirstName}) cannot begin with space.`);
}else{
    console.log(FirstName);
}

let EndResult = FirstName.endsWith(" ");

if(EndResult){
    console.log(`Your name(${FirstName}) cannot end with space.`);
}else{
    console.log(FirstName);
}

let IncludeResult = userName.includes(" ");

if(IncludeResult){
    console.log(`Your user name(${userName}) cannot include space.`);
}else{
    console.log(userName);
}



let phoneNumber = "071_802_3345";
phoneNumber = phoneNumber.replaceAll("_","-");  // replace all '_' in to '-'
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0");   //want 15 characters..if not fill 0 in start.
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(20, "0");     //want 20 characters...if not fill 0 in the end.
console.log(phoneNumber);




