for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("num= " + i);
    }
}

// guess number | a simple game
let givenNum = 29;
let guessNum = prompt("Guess the game number: "); // from prompt, value will come as string format like- "25"

while (givenNum != guessNum) {
    guessNum = prompt("you enterted wrong num, Guess again!");
}
console.log("Congrats, You guess the correct name");

