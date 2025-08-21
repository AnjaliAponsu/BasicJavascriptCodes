/*getters = special method that makes a property readable
  setters = special method that makes a property writable

  validate and modify a value when reading/writting a property
*/

class PersonAge{
    constructor (age){
        this.age = age; // underscore indicates a private property
    }

    set age(newAge){
        if (newAge <= 0){
            console.error("Age must be positive number.");
        }else{
            this._age = newAge;
        }
    }

    get age (){
        return this._age;
    }

}

const personAge1 = new PersonAge(25);
console.log(personAge1.age); 

const personAge2 = new PersonAge(-30);
console.log(personAge2.age);

const personAge3 = new personAge("Person");
console.log(personAge3.age);
