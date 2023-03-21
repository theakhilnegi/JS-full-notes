//------default can only be use one class in a file------
export default class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info(){
        console.log(`Full name is ${this.firstName} ${this.lastName} and age is ${this.age}`);
    }
}

export class Person2{
    constructor(firstName,lastname,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info(){
        console.log(`Person2: Full name is ${this.firstName} ${this.lastName} and age is ${this.age}`);
    }
}