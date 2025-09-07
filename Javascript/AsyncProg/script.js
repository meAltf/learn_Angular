console.log("first");
console.log("second");

function greet(){
    console.log("Hey robert!");
}

setTimeout(greet, 3000);

// one more way using arrow function
setTimeout(() => {
    console.log("Hey AI, wait!");
}, 3000);

console.log("third");
console.log("fourth");