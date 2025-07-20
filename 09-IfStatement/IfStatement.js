/////////////////////////If Statement///////////////////////////
//If a condition is true, execute some code ; if not, do somthing else

const CheckButton = document.getElementById("CheckButton");
const Result = document.getElementById("Result");

let tax;

CheckButton.onclick = function() {
    const Salary = Number(document.getElementById("SalaryInput").value);
    if(Salary <= 5000){
         Result.textContent = "Your salary is less than or equal 5000 . So you don't need to pay tax";
    }else{
        Result.textContent = "Your salary is greater than 5000. So you need to pay tax";
        if(Salary < 10000){
            tax = Salary * 0.2;
            Result.textContent = "You need to pay " + tax + " as tax";
        }else if(Salary < 20000){
            tax = Salary * 0.3;
            Result.textContent = "You need to pay " + tax + " as tax";
        } else{
            tax = Salary * 0.4;
            Result.textContent = "You need to pay " + tax + " as tax";
        }
    } 
}




