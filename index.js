"use strict";

//false: 0, -0, '', null , undefined, NoN
//true: -1, 'hello', [], {}

let obj = {
    name: "ellie",
}
if([obj]) {
    console.log(true);
    console.log(obj.name);
} else {
    console.log(false);
}
console.log("===========================");
obj && console.log(obj.name);

console.log("===========================");

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
console.log("===========================");

function surprise(operator) {
    const result = operator();
    console.log(result);
}
surprise(() => add(2, 3));

console.log("===========================");

function surprise(operator) {
    const result = operator(2, 3);
    console.log(result);
}
surprise(add);

console.log("=========================== class");

// class Counter {
//     constructor() {
//         this.counter = 0;
//     }

//     increase(runIF5Time) {
//         this.counter++;
//         console.log(`칸운터 : ${this.counter}`);
//         if(this.counter % 5 === 0) {
//             runIF5Time(this.counter);
//         }
//     }
// }
// function printSomething(num) {
//     console.log(`${num}번째 호출됨!`);
// }
// const coolCounter = new Counter();
// coolCounter.increase(printSomething);
// console.log("=========================== class");
class Counter {
    constructor(runIF5Time) {
        this.counter = 0;
        this.callback = runIF5Time;
    }

    increase() {
        this.counter++;
        console.log(`칸운터 : ${this.counter}`);
        if(this.counter % 5 === 0) {
            // if(this.callback) {
            //     this.callback(this.counter);
            // }
        this.callback && this.callback(this.counter);
        }
    }
}
function printSomething(num) {
    console.log(`${num}번째 호출됨!`);
}
const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

const students = {
    name: "anna",
    age: 20,
}

const {name} = students;
console.log(name);
console.log(students.name, students.age);
console.log("===========================");
const {name: studentName, age: studentAge} = students;
console.log(studentName, studentAge);
console.log("=========================== array");
const animals = ["강아지", "고양이", "참새"]
const [dog, cat, bird] = animals;
console.log(dog, cat, bird);
console.log("=========================== object");
const obj1 = {key: "key1"}
const obj2 = {key: "key2"}
const obj3 = {...obj1};
const array = [obj1, obj2];
console.log(array);
console.log("===========================");
const arrayCody = [...array, obj3];
obj1.key = "newkey1";
console.log(array, arrayCody);
console.log("===========================");
function printMessage(message = "default message") {
    console.log(message);
}
printMessage("hello");
printMessage();
console.log("===========================");
{
    const isCat ="true";
    {
        // let component;
        // if(isCat) {
        //     component = "😺";
        // } else {
        //     component = "🐶";
        // }
        // console.log(component);
        console.log("===========================");
        const component = isCat ? "😺" : "🐶"; 
        const component2 = isCat ? console.log(component) : console.log(component);
        const component3 = isCat && console.log(component);
        console.log(component);
    }
    console.log("===========================");
    {
        const component = isCat ? "😺" : "🐶";
        console.log(component);
    }
    
}

const person = {
    name: "ellie",
    score: 5,
}

function greetings(person2) {
    const {name, score} = person2;
    console.log(`hellow ${name}, your score is ${score}`);
}
greetings(person);

 console.log("===========================");
//짝수만 출력, 곱하기4, 더하기
 const items = [1, 2, 3, 4, 5, 6];
//  const result = items.filter(item => item % 2 === 0);
//  console.log(result);
//  const result2 = result.map(item => item * 4);
//  console.log(result2);
//  const result3 = result2.reduce((sum, item) => sum + item, 0);
//  console.log(result3);
const result = items
.filter(item => item % 2 === 0)
.map(item => item * 4)
.reduce((sum, item) => sum + item, 0);
console.log(result);
 console.log("===========================");
 const array2 = ["dog", "cat", "bird", "dog", "horse", "bird"];
 console.log(array2);
 console.log([...new Set(array2)]);
 console.log("===========================");
 const formatter = new Intl.RelativeTimeFormat("ko", {numeric: "auto"});
 const today = new Date();
 const started = new Date(2025, 9, 27);
 const daysPassed = Math.ceil((started - today) / (1000 * 60 * 60 * 24));
 console.log(`드림코딩 시작일: ${formatter.format(daysPassed, "day")}`);