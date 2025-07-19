/////////////////////Checed State//////////////////////////////
// .checked = property that determines the checked state of an HTML checkbox or Radio element

const CheckedStateInput = document.getElementById("CheckedStateInput");
const RadioInput1 = document.getElementById("RadioInput1");
const RadioInput2 = document.getElementById("RadioInput2");
const RadioInput3 = document.getElementById("RadioInput3");
const Submitbtn = document.getElementById("Submit");
const checkboxResult = document.getElementById("checkboxResult");
const radioResults = document.getElementById("radioResults");

Submitbtn.onclick = function() {
    if (CheckedStateInput.checked) {
        checkboxResult.textContent = 'You are subscribed.';
    }else{
        checkboxResult.textContent = 'You not subscribe.';
    }

    if(RadioInput1.checked) {    //Check radio button option1 click or not. If it is true run this.
        radioResults.textContent = 'you select option 1.';
    }else if(RadioInput2.checked) {
        radioResults.textContent = 'You select option 2.';
    }else if(RadioInput3.checked){
        radioResults.textContent = 'You select option 3.';
    }else{
        radioResults.textContent  = 'You need to select one option.';
    }
}
