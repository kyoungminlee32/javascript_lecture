"use strict";
function printHellow() {
    console.log("hellow");
}
printHellow();

function log(message) {
    console.log(message);
}
log("안녕하세요");
log("감사");

const ellie = {name: "ellie"};

function changeName(obj) {
    obj.name = "coder";
}

changeName(ellie);
console.log(ellie);
console.log("===========================");
function showMessage(message, from = "unknown") {
    console.log(`${message} by ${from}`);
}
showMessage("hi");
showMessage("hi", "ellie");
console.log("===========================");
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    console.log("===========================");
    for (const argsItem of args) {
        console.log(argsItem);
    }
    console.log("===========================");
    args.forEach(argsItem => console.log(argsItem));
}
printAll("dream", "coding");
console.log("===========================");
// anonymous function
const anonymous = function() {
    console.log("anonymous function");
}
anonymous();
console.log("===========================");
// named function
function printName() {
    console.log("named function");
}
printName();
console.log("===========================");
//콜백 함수
function randomQuis(answer, printYes, printNo) {
    if(answer === "love you") {
        printYes();
    } else {
        printNo();
    }
}
function printYes() {
    console.log("yes!");
}
function printNo() {
    console.log("no!");
}
randomQuis("wrong", printYes, printNo);
randomQuis("love you", printYes, printNo);
console.log("===========================");
const simplePrint = function() {
    console.log("simplePrint!");
}
simplePrint();
console.log("===========================");
const simplePrint2 = () => {console.log("simplePrint22222!");}
simplePrint2();
console.log("===========================");
const add = (a, b) => a + b;
console.log(add);
console.log("===========================");
const add2 =function() {
    return a + b;
}
console.log(2 + 3);
console.log("===========================");