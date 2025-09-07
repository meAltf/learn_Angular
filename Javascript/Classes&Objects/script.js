const student = {
    fullName: "Robert Alataf",
    age: 23,
    marks: 98,
    printMarks: function () {
        console.log("marks= ", this.marks);
    },
};
console.log(student);

// different way to create function
const employee = {
    calcTax1() {
        console.log("Tax rate is 10% from 2nd way of creating function");
    },
};
console.log(employee.calcTax1());

/**
Prototypes in JS
- JS objects have a special property called prototype.
- A javaScript object is an entity having state and behavior (properties and method).

-We can set prototype using[ __proto__ ]

*If object & prototype have same method,
object’s method will be used.

**/


const employee1 = {
    salary: 900000,
};
const employee2 = {
    salary: 900000,
};
const employee3 = {
    salary: 900000,
};
const employee4 = {
    salary: 900000,
};

// add prototype
employee1.__proto__ = employee;
employee2.__proto__ = employee;
employee3.__proto__ = employee;
employee4.__proto__ = employee;
