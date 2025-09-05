alert("Hello Robert");

let num = prompt("Enter a number");
console.log(num * 5);
console.log(num % 5 === 0);


// grade question-code
let marks = prompt("Enter the marks");
if (marks <= 100 && marks >=90){
    console.log("Grade- A")
} else if (marks <=89 && marks >= 70){
    console.log("Grade- B");
} else if (marks <= 69 && marks >=60){
    console.log("Grade C");
} else if(marks <= 59 && marks >= 50){
    console.log("Grade -D");
} else {
    console.log(`FAIL ${marks}`);
}