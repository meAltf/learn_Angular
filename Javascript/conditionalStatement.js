let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "while";
}

console.log(color);

if (mode === "dark") console.log(color);


// ternary operator
let age = 18;
age >= 18 ? console.log("Adult") : console.log("Child");

// switch statement
const expr = "Papayaa";
switch (expr) {
    case 'Oranges':
        console.log("Oranges cost : $5");
        break;

    case 'Mangoes':
    case 'Papayaa':
        console.log("Mangoes and papayaa cost : $4");
        break;

    default:
        console.log(`out of stock: ${expr}`);
}