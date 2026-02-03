"use strict";

{
     // array -> string
    const fruits = ["apple", "bannana", "orange", "mango"];
    const result = fruits.join(", ");
    console.log(result);
    // const result2 = fruits.split(", ");
    // console.log(result2);
}
console.log("===========================");
{
     // string -> array
    const fruits = "apple, bannana, orange, mango";
    const result = fruits.split(", ");
    console.log(result);
    console.log(result.length);
}
console.log("===========================");
{
    // array [배열] -> 역순
    const fruits = ["apple", "bannana", "orange", "mango"];
    const result = fruits.reverse();
    console.log(result);
    console.log(result.length);
    console.log(fruits);
}
console.log("===========================");
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2)
    console.log(result);
    console.log(array);
}
console.log("===========================");
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}
console.log("===========================");

class student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new student("A", 29, true, 66),
    new student("B", 28, false, 80),
    new student("C", 30, true, 90),
    new student("D", 40, false, 66),
    new student("E", 18, true, 88),
]
{
    const result = students.find((student, enrolledIndex) => {
        console.log(student, enrolledIndex);
        return student.score === 90;
    });
    console.log(result);
}

console.log("===========================");
{
    const result = students.filter(student => student.enrolled);
    console.log(result);
    result.forEach(student => console.log(student));
}

console.log("===========================");
{
    const result = students.map((student) => student.score * 2);
    console.log(result);
}
console.log("===========================");
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);
    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

console.log("===========================");
{
    console.clear();
    // const result = students.reduce((prev, curr) => {
    //     console.log("----------");
    //     console.log(prev);
    //     console.log(curr);
    //     console.log(curr.name);
    //     return prev + curr.score;;
    // }, 0)
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log("===========================");
    console.log(result / students.length);
}
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join(", ");
    console.log(result);
}
console.log("===========================");
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join(", ");
    console.log(result);
}