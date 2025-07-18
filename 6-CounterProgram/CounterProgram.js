const decreaseBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increment");

const counterValue = document.getElementById("countlabel");

let count = 0;
decreaseBtn.onclick = function(){
    count--;
    counterValue.textContent = count;
}
resetBtn.onclick = function(){
    counterValue.textContent = 0;
}
increaseBtn.onclick = function(){
    count++;
    counterValue.textContent = count;
}