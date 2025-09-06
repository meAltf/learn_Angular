// 1. filter in marks
let marks = [60, 68, 78, 90, 94, 99, 98];
let filteredMarks = marks.filter((mark) => {
    return mark >= 90;
});
console.log(filteredMarks);

// 2. take input and operate
let inputNum = prompt("Enter a number");
let arr = [];
for (let i = 1; i <= inputNum; i++) {
    arr[i - 1] = i;
}
console.log(arr);

const outputSum = arr.reduce((result, curr) => {
    return result + curr;
});
console.log(`outputSum ${outputSum}`);

const factorial = arr.reduce((result, curr) => {
    return result * curr;
});
console.log(`factorial of given input ${factorial}`);