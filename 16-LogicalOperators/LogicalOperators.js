/////////////////////////////////////Logical Operators///////////////////////////////////
//used to combine or manipulate boolean values 
//AND   =   &&
//OR    =   ||
//NOT   =   !

const temp = 100;

if(temp >0 && temp <30){                         
    console.log("The weather is good.");
}else{
    console.log("The weather is not good.");
}

const isSunny = true;

if(!isSunny){
    console.log("It is cloudy");
}else{
    console.log("It is sunny");
}