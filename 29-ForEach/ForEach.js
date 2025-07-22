// forEach() = method used to iterate over the elements of an array and apply a specified function(callback) to each element
//  array.forEach(callback)
//  element, index, array are provided

let numbers = [1, 2, 3, 4, 5, 6, 7];

function display(element){
    console.log(element);
}
function double(element, index, array){
    array[index] = element * 2;
    let result = array[index] ;
    console.log(result);   
}

display(numbers);

numbers.forEach(display);
console.log("------------------")
numbers.forEach(double);

