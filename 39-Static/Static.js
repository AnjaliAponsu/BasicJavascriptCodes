/*static = keyword that defines properties or methods that belong 
           to a class itself rather than the objects created from
           that class (class owns anything static, not the object.)
*/
class MathUtill{
    static PI = 3.14159;

    static getDiameter(radius){
        return 2 * radius;
    }
    static getCircumference(radius){
        return 2 * MathUtill.PI * radius;
    }
    static getArea(radius){
        return 2 * MathUtill.PI * (radius * radius);
    }
}
const MathUtil = new MathUtill();
console.log(MathUtill.PI);
console.log(MathUtill.getDiameter(10));
console.log(MathUtill.getCircumference(10));
console.log(MathUtill.getArea(10));

//example 2------------------

class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`Total users: ${User.userCount}`);
    }
    sayHello(){
        console.log(`Hello, my name is ${this.username}`);
    }
}
const user1 = new User('Alice');
const user2 = new User('Bob');
const user3 = new User('Oscar');

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

User.getUserCount();

user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(User.userCount);