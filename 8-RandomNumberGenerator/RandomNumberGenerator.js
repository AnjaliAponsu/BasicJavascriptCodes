
const generateBtn = document.getElementById('GenerateBtn');
const randomNumberLabel = document.getElementById('randomNumberLabel'); 

const min = 1;
const max = 10;
let randomNum;

generateBtn.onclick = function(){
    randomNum = Math.random() * (max - min ) + min;
    randomNumberLabel.textContent = randomNum;
    console.log("Random Number: " + randomNum);
} 