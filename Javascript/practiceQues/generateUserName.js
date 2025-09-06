let input = prompt("Please enter your full name");
let userName = "@".concat(input).concat(input.length);

const output = userName.replaceAll(" ", "");
console.log("Here is your generate userName: " + output);