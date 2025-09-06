function myFunc() {
    console.log("First function");
    console.log("Check karloo");
}
myFunc();

// NaN example
function func2(msg, n) {
    console.log(msg * n);
}
func2("robert", 234);

// return value from function
function func3(a, b) {
    s = a + b;
    return s;
}
let result = func3(50, 56);
console.log(result);


// Arrow function -> Compact way of writing function | modern JS
const arrowSum = (a, b) => {
    console.log(a + b);
};
console.log(arrowSum(5, 6));

const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(5, 6));


// without input
const greet = () => {
    console.log("Hello Robert");
}
greet();



// forEach loop in Arrays
// arr.forEach(callBackFunction) : A callback function is a function that passed as an argument to another function.

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) { // value at each index
    console.log(val);
});

// using arrow function
arr.forEach((val) => {
    console.log(val);
});


// example
let cities = ["chennai", "mumbai", "delhi", "bihar"];
cities.forEach((elem) => {
    console.log(elem.toUpperCase());
});

// forEach variant
cities.forEach((elem, idx) => {
    console.log(elem.toUpperCase(), idx);
});


cities.forEach((elem, idx, cities) => {
    console.log(elem.toUpperCase(), idx, cities);
});