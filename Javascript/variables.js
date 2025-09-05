// JS- Dynamically types language
// ES-6 | Ecma script

fullName = "Robert!";
age = 23;
salary = 140000000
console.log(fullName + " " + age + " " + salary);

// null -> a special value | khali
x = null;
console.log(x);

// undefined -> malum hi nhi ki kya hai iske ander
y = undefined
console.log(y);

isFollow = true;
console.log(isFollow);

// let, const, var
// 1. var : Global scope variable | It can be re-declared & updated
// 2. let : Block scope variable | It can't be re-declared but updated
// 3. const : Block scope variable | It can't be re-declared or updated


var fName = "Macbook m1";
var quantity = 1;
var totalPrice = 600000;
console.log(fName + " " + quantity + " " + totalPrice);

/*
var age = 20;
var age = 21;
var age = 22;
It's possible using var | re-declare 
*/


/*
let age = 20;
let age = 21;
It's not possible using var | re-declare | It will give error
but we can update like
age = 23
*/

const ageY = 23;
const PI = 3.14;
console.log(PI);



var c;
let a;
// const b; -> It will give error | Uncaught syntax error
console.log(c);
console.log(a);
// Both will print | undefined
