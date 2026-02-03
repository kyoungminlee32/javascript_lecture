"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hellow`);
    }
}
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
console.log(ellie);
ellie.speak();
console.log("===========================");
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if(value < 0) {
        //     throw Error("age can not be negtive");
        // }
        this._age = value < 0 ? 0 : value;;
    }
}
const user1 = new User("steve", "job", -1);
console.log(user1.age);
console.log("==========================="); 
class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends shape{}
class Triangle extends shape {
     draw() {
        super.draw();
        console.log("▲");
    }
      getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 30, "blue");
const triangle = new Triangle(20, 20, "red");

console.log(rectangle.getArea());
rectangle.draw();

console.log(triangle.getArea());
triangle.draw();

console.log("==========================="); 