function cntVowels(input) {
    let count = 0;
    for (const char of input) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(`Total count of vowels ${count}`);
}
cntVowels("robertBroonie");


// using arrowfunction
const totalCount = (input) => {
    let count = 0;
    for (const char of input) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}
console.log("Total count using arrow function: " + totalCount("robertbroonie"));