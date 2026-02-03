"use strict";

function printImmediately(print) {
    print();
}

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

console.log("1");
setTimeout(() => console.log("4"), 1000);
console.log("2");
console.log("3");

printImmediately(() => console.log("hello"));
printWithDelay(() => console.log("async callback"), 2000);

class UserStorge {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === "ellie" && password === "dream") ||
                (id === "coder" && password === "academy")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === "ellie") {
                onSuccess({name: "ellie", role: "admin"});
            } else {
                onError(new Error("no access"));
            }
        }, 1000)
    }
}

const userStorge = new UserStorge();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorge.loginUser (
    id,
    password,
    user => {
        userStorge.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)