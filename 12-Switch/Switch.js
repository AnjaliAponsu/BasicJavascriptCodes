////////////////////////////////Switch//////////////////////////////
//SWITCH can be an efficient replacement to many else if statements


const SubmitBtn = document.getElementById("SubmitBtn");
const result = document.getElementById("result");

SubmitBtn.onclick = function() {
    const age = Number(document.getElementById("AgeInput").value);
    switch (age>0) {
    case age < 13:
        result.textContent = "Child";
        console.log("Child");
        break;
    case age >= 13 && age < 18:
        result.textContent = "Teenager";
        console.log("Teenager");
        break;
    case age >= 18 && age < 60:
        result.textContent = "Adult";
        console.log("Adult");
        break;
    case age >= 60:
        result.textContent = "Senior";
        console.log("Senior");
        break;
    default:
        console.log("Invalid age");
}
}



