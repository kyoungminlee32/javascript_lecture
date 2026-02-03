"use strict";
//Array
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2);
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log("===========================");
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// for(const fruit of fruits) {
//     console.log(fruit);
// }
// fruits.forEach(function(fruit, index, array) {
//     console.log(fruit, index, array);
// })
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));
fruits.forEach(fruit => console.log(fruit));
console.log("===========================");
fruits.push("딸기", "복숭아");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log("===========================");
fruits.unshift("딸기", "복숭아");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.push("복숭아");
console.log(fruits);
fruits.splice(1, 1, "수박", "키위");
console.log(fruits);
console.log("===========================");
const fruits2 = ["파인애플", "망고"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
console.clear();
console.log("===========================");
console.log(fruits);
console.log(fruits.indexOf("수박"));
// console.log(fruits.indexOf("코코넛"));
console.log(fruits.includes("수박"));
// console.log(fruits.includes("코코넛"));
console.clear();
console.log("===========================");
console.log(fruits);
console.log(fruits.indexOf("복숭아"));
console.log(fruits.lastIndexOf("복숭아"));