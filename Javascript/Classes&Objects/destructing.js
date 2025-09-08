/** 

Destructuring is a feature in JavaScript that lets you unpack values from arrays or objects 
into separate variables in a clean, easy way.

**/

// Array example
const numbers = [10, 20, 30];

const first = numbers[0];
const second = numbers[1];
console.log(first, second); // 10 20

// With Destructing
const [firstDes, secondDes] = numbers;
console.log(firstDes, secondDes); // 10 20


// Object example
const user = {
    fName: "Robert",
    role: "developer"
};
const fullName = user.fName;
const roleUser = user.role;
console.log(fullName, roleUser); // Robert developer

// with Destructing
const [fullNameDes, userRoleDes] = user;
console.log(fullNameDes, userRoleDes);