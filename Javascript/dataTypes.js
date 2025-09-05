// primitve : Number, String, Boolean, Null, Undefined, BigInt, Symbol
// Non- primitive : Object(Arrays, function)
let a;
console.log(typeof (a));

let b = 23;
console.log(typeof (b));

let c = "robert";
console.log(typeof (c));

let d = BigInt("446565767768");
console.log(typeof (d));

let e = Symbol("Rbrt");
console.log(typeof (e));

// Object :
const student = {
    fullName: "Robert Alataf",
    age: 23,
    cgpa: 8.46,
    isPass: true
};
console.log(student);
console.log(student.fullName);
console.log(student["age"]);
console.log(student.cgpa);

// change in objects values
student["age"] = student["age"] + 1;
console.log("first method " + student.age);

student.age += 2;
console.log("second method " + student.age);


// const variable we can't update but const object we can able to update their key