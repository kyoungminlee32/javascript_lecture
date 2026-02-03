"use strict";
// object (객체_)
const ellie = {
    name: "ellie",
    age: 20,
    hasJob: true,
}

function print(name, age) {
    console.log(name, age);
}
console.log(ellie.name);
console.log(ellie["name"]);

console.log("==========================="); 

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, "name");
console.log("==========================="); 
const person4 = new Person("coder", 30);
function Person(name, age) {
    return {
        name: name,
        age: age,
    };
};
console.log(person4);
console.log("name" in person4);
console.log("age" in person4);
console.log("random" in person4);
console.log("==========================="); 
console.clear();
// const ellie2 = {name: "ellie", age: 20, job: "developer"};

for(const key in ellie) {
    console.log(key);
}

const array = [1, 2, 3, 4, 5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
for(const value of array) {
    console.log(value);
}
console.log("==========================="); 

const user = {name: "ellie", age: 20};
const user2 = user;
// user2.name = "coder";
console.log(user);
console.log("==========================="); 
//odl way
const user3 = {};
for(const key in user) {
    user3[key] = user[key];
}
user3.name = "coder";
console.log(user);
console.log(user3);
console.log("==========================="); 
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);
console.log("===========================");
const fruit1 = {color: "red"};
const fruit2 = {color: "blue", size: "big"};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
console.log("===========================");