"use strict";
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("ellie's \n bootk");
console.log("ellie's \t bootk222");
console.log("ellie's \\ bootk333");

let counter = 2;
// const preIncrement = ++ counter;
// console.log(preIncrement);
// counter = counter +1;
// console.log(counter);
const preIncrement2 = counter++;
counter = counter +1;
console.log(preIncrement2);
console.log(counter);

let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;
console.log(x);

const stringFive = "5";
const numberFive = 5;
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
console.log("===========================");
const ellies1 = {name: "ellie"};
const ellies2 = {name: "ellie"};
const ellies3 = ellies1;
console.log(ellies1 == ellies2);
console.log(ellies1 === ellies2);
console.log(ellies1 === ellies3);
console.log("===========================");
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);
console.log("===========================");
const myname = "ellie";
console.log(myname === "ellie" ? "Welcome, Ellies" : "goodgye");
console.log(myname !== "ellie" ? "Welcome, Ellies" : "goodgye");
console.log("===========================");
const browser = "IE";
switch (browser) {
    case "IE" :
        console.log("go away!");
        break;
    case "chrome" :
    case "fireFox" :
        console.log("love you!");
        break;
    default :
        console.log("same all!!");
        break;
}