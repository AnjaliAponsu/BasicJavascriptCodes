// .filter() create a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 8, 9, 23, 12, 78, 77];

function isEven(element){
    return element % 2 === 0; 
}

function isOdd(element){
    return element % 2 !== 0;
}

const EvenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd)
console.log(EvenNumbers);
console.log(oddNumbers);

