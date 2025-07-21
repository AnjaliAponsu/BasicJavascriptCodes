////////////////////////////Array///////////////////////////////
//A variable like structure that can hold more than 1 value

let animal = ["dog", "cat", "rabbit", "lion"];

animal[2] = "Monkey";    //give priority for this

console.log('[0] : ' + animal[0]);
console.log(animal[0] + ' , ' + animal[1] + ' , ' + animal[2] + ' , ' + animal[3] + ' , ' + animal[4] + ' , ' + animal[5] );

animal.push("zebra");   //end of the array it add this
console.log("Add element : " + animal[0] + ' , ' + animal[1] + ' , ' + animal[2] + ' , ' + animal[3] + ' , ' + animal[4] + ' , ' + animal[5] );

animal.unshift("Parrot");
console.log(animal[0] + ' , ' + animal[1] + ' , ' + animal[2] + ' , ' + animal[3] + ' , ' + animal[4] + ' , ' + animal[5] );

animal.pop();           //remove the end of element in array
console.log("Remove last element : " + animal[0] + ' , ' + animal[1] + ' , ' + animal[2] + ' , ' + animal[3] + ' , ' + animal[4] + ' , ' + animal[5] );

animal.shift()
console.log("Remove first element : " + animal[0] + ' , ' + animal[1] + ' , ' + animal[2] + ' , ' + animal[3] + ' , ' + animal[4] + ' , ' + animal[5] );

let NumOfAnimals = animal.length;
console.log("Animals count in array : " + NumOfAnimals);

let index = animal.indexOf("lion");
console.log("lion index number : " + index);

for(let i = 0; i < animal.length; i++){
    console.log("for loop : " + animal[i]);
}

for(let animals of animal){
    console.log("'for loop' short cut : " + animals);
}


let fruits = ["mango", "banana", "apple", "pine apple"]
fruits.sort();                    //make alphabat order the output 
console.log(fruits);

fruits.sort().reverse();
console.log(fruits);