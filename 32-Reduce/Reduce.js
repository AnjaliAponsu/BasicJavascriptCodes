// .reduce() =reduce the element of an array to a single value

const prices = [100, 500, 420, 380, 1000];

function sum(accumulator, element){        // sum(100,500)  -> sum(600, 420)  -> sum(1020, 380) ...
    return accumulator + element;          // 600           -> 1020           -> 1400 ...
}

const total = prices.reduce(sum);
console.log(total)