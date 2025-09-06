let salary = [20000, 250000, 30000, 4500000, 670000, 8999000];
console.log(salary);
console.log(salary.length);
console.log(typeof salary);

console.log(salary[2]);
console.log(salary[89]); // undefined
salary[2] = 900000;

for (let idx = 0; idx < salary.length; idx++) {
    console.log(salary[idx]);
}

// for-of loop
for (let el of salary) {
    console.log(el);
}



// Array methods: push(), pull(), toString()
let fruits = ["apple", "orange", "banana", "pomegrante"];
console.log(fruits);
fruits.push("guava");
console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(fruits.toString());

// array methods | concat()- joins multiple arrays & return
// unshift()- add to start | like push()
// shift()- delete from start & return | like pop()

let marvelsHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeros = ["krish"];

let heroes = marvelsHeroes.concat(dcHeroes).concat(indianHeros);
console.log(heroes);

let change1 = indianHeros.unshift("shaktiman");
console.log(indianHeros);


let change2 = dcHeroes.shift();
console.log(dcHeroes);



// slice() - does not change in original array
// splice() - able to change in original array(add, remote, update)
let marvelsHeroes2 = ["thor", "spiderman", "ironman", "antman"];
let output1 = marvelsHeroes2.slice(0, 3);
console.log(output1);

// splice(startIdx, delCount, newElem), third parameter is optional
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
let output2 = arr.splice(2, 2, 1001, 1002);
console.log(arr);

let output3 = arr.splice(2, 3);
console.log(arr);

let output4 = arr.splice(4, 0, 20000);
console.log(arr);

let output5 = arr.splice(1, 1);
console.log(output5);

