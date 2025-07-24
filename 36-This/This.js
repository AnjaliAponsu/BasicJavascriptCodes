/*this = reference tothe object where THIS is used
         (the object depends on the immediate context)
         
         person.name = this.name*/

const person1 = {
    name : "Anjali",
    city : "Dehiwala",
    sayHello : function(){console.log(`hey i am ${this.name}`)},
    location : function(){console.log(`Hey! i am ${this.name} live in ${this.city}`)}
}

const person2 = {
    name : "Chathurika",
    city : "Kandy",
    sayHello : function(){console.log(`hey i am ${this.name}`)},
    location : function(){console.log(`Hey! i am ${this.name} live in ${this.city}`)}
}

person1.sayHello();
person1.location();

person2.sayHello();
person2.location();