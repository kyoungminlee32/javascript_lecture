"use strict";

// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         resolve("ellie");
//         // reject(new Error("no network"));
//     });
// }
async function fetchUser() {
    return "ellie";
}

const user = fetchUser();
user
.then(console.log);
console.log(user);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return "🍎";
}

async function getBanana() {
    await delay(1000);
    return "🍌";
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);


function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits2 => fruits2.join(" + "));
}

pickAllFruits().then(console.log);

function pickOnlyone() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyone().then(console.log);