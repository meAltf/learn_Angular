for (let i = 1; i <= 1000; i++) {
    console.log("Hey robert!");
}

// calculate sum
let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// while loop
let i = 10;
while (i <= 14) {
    console.log(`Increment the value: ${i}`);
    i++;
}


// do-while loop
let k = 20;
do {
    console.log("Atlest one time it will run even it's not satisfy the answer");
} while (k < 10);




// for-of loop | for string and arrays
let str = "RobertAlataf";
let size = 0;
for (let i of str) {
    console.log("i " + i + " ");
    size++;
}
console.log("size of string " + size);



// for-in loop | for objects and arrays
let student = {
    name: "Robert",
    age: 23,
    cgpa: 8.67,
    isPass: true
};

for (let key in student) {
    console.log("key= " + key + " " + "Value= " + student[key]);
}