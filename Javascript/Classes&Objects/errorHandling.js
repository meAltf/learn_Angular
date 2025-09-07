let a = 10;
let b = 20;
try {
    let sum = a + c;
    console.log(`The sum is ${sum}`);
} catch (err) {
    console.log("The reference of c is not defined");
}