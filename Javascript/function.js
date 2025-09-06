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


// some more Array methods

// 1. map | to create a copy of array
let arr1 = [2, 4, 6, 8, 10];
let newArr1 = arr1.map((val) => {
    return val * val;
});
console.log(arr1);
console.log(newArr1);

// 2. filter | to create a new array based on some filter condition
let arr2 = [2, 3, 4, 5, 6, 7, 8, 10];
let newArr2 = arr2.filter((val) =>{
    return val % 2 !== 0;
});
console.log(newArr2);

// 3. reduce | perform some operation and reduces the array to a single value, It returns a single value
let arr3 = [2, 4, 6, 10];
const output = arr3.reduce((result, curr) => {
    return result + curr;
});
console.log(output);


// print largest in array
let arr4 = [2, 3, 4, 5, 600, 7, 8, 10];
const maxNum = arr4.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(maxNum);