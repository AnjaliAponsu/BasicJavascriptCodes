// rest parameters(...rest) allow a function work a variable number of arguments by bunding them into an array
//        spread = expands an array into seperate element
//        rest   = bundles seperate elements into an array 

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "banana";
const food2 = "mango";
const food3 = "apple";
const food4 = "pine apple";
const food5 = "orange";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

console.log("---------------------");
function sum(...numbers){
    let results = 0;
    for(let number of numbers){
        results += number;
    }
    return results;
}
const total = sum(1, 2, 4, 8, 9, 10);
console.log(`Your total is ${total}`);

function getAverage(...numbers){
    let results = 0;
    for(let number of numbers){
        results += number;
    }
    return results / numbers.length;
}
const totalAvg = getAverage(1, 8, 9, 2);
console.log(`Your total average is ${totalAvg}`);

console.log("---------------------");

function CombineName(...Strings){
    return Strings.join(" ");
}
const fullName = CombineName("Miss.", "Anjali", "Sewmini", "Aponsu");
console.log(fullName);