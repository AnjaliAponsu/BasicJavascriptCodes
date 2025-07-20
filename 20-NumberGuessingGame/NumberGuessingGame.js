const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    console.log(typeof guess, guess);

    if(isNaN(guess) || guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number.");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("Too low! Try again.");
        }else if(guess > answer){
            window.alert("Too high! try again.");
        }else{
            window.alert(`Correct! The answer was ${answer}`);
            running = false;
        }
    }
    
}