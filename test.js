// Variables and Data Types
let greeting = "Hello,";
const name = "John";
let age = 25;
let isStudent = true;
let colors = ["red", "green", "blue"];

// Conditionals
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Loops
console.log("Colors:");
for (let color of colors) {
    console.log(color);
}

let i = 0;
while (i < 5) {
    console.log(`Count: ${i}`);
    i++;
}

// Functions
function greet(personName) {
    return `${greeting} ${personName}!`;
}

console.log(greet(name));

// Objects
let person = {
    firstName: "Laith",
    lastName: "Laith",
    age: 30,
    isStudent: false,
    introduce: function() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}.`);
    }
};

person.introduce();
