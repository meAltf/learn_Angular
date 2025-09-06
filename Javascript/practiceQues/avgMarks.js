let marks = [45,67,78,45,88,90];
let totalMarks = 0;

for(let mark of marks){
    totalMarks += mark;
}

console.log(`Average marks: ${totalMarks/marks.length}`);