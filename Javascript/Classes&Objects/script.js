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
    calcTax2: function () {
        console.log("Tax rate is 20% from normal way of creating function");
    },
};
console.log(employee.calcTax1());
console.log(employee.calcTax2());