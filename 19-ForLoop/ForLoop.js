//////////////////////////////////For loop/////////////////////////////
//for loop repeat some code a limited amount of times
let i;
for(i = 0; i < 10; i+=2 ){
    console.log("i : " + i);
}
console.log("-----------------");
let y;
for(y=10; y>=0; y--){
    console.log("y : " + y);
}
console.log("-----------------");
let a;
for(a = 0; a <= 10; a++ ){
    if(a==5){
        continue;  // skip 5 output and continue
    }else{
        console.log("a : " + a);
    }
}
console.log("-----------------");
let b;
for(b = 0; b <= 10; b++ ){
    if(b==5){
        break;  // it brak in 5
    }else{
        console.log("b : " + b);
    }
}