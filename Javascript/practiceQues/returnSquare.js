// using forEach loop

let arr = [3, 45, 56, 78];

// way-1 to write forEach 
arr.forEach((num) => {
    console.log(num * num);
});

// way-2 to write forEach
let calcSquare = (num) => {
    console.log(num * num);
};
arr.forEach(calcSquare);