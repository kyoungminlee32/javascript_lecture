"use strict";

let json = JSON.stringify(true);
console.log(json);

console.log("===========================");

json = JSON.stringify(["apple", "banana"]);
console.log(json);

console.log("=========================== stringify");

const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump`);
    }
}
// json = JSON.stringify(rabbit["name", "color"]);
// json = JSON.stringify(rabbit);
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key ==="name" ? "ellie" : value;
});
console.log(json);

console.log("=========================== parse");

json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "birthDate" ? new Date(value) : value;
});
console.log("=========================== birthDate check");
console.log(obj);
rabbit.jump();
console.log(`${rabbit.birthDate.getDate()}일`);
console.log(obj.birthDate.getDate() + "일");


console.log("===========================");