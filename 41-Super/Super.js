/*super is a keyword that used in classes to call the constructor or
  access the properties and methods of a parent(superclass)
     this = this object
     super = the parent */

class Animals{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}
class Parrot extends Animals{
    constructor(name, color, flyspeed){
        super(name, color);
        this.flyspeed = flyspeed;
    }
}

class cat extends Animals{
    constructor(name, color, runSpeed){
        super(name, color);
        this.runSpeed = runSpeed;
    }
}

const parrot = new Parrot("Polly", "Green", 20);
console.log(parrot.name); 
console.log(parrot.color);
console.log(parrot.flyspeed); 

const cat1 = new cat("Whiskers", "Black", 15);
console.log(cat1.name); 
console.log(cat1.color);
console.log(cat1.runSpeed);


