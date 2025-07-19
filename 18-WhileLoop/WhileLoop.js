//////////////////////////////////While Loop//////////////////////////////////
//Repeat some code while some condition is true


let username = '';

while(username === '' || username === null){      //While you enter the name it's looping.
    username = window.prompt("Enter your user name : ");
}
console.log(`Hello ${username}`);




let loggedIn = true;
let name;
let password;

while(!loggedIn){
    name = window.prompt('Enter your name : ')
    password = window.prompt('Enter your password');

    if(username ==='anjali' && password === '1234'){
        loggedIn = true;
        console.log("You are logged in!");
    }else{
        console.log("invalid credentials! Please try again. ")
    }
}