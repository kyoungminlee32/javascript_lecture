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
}
printAll("dream", "coding");