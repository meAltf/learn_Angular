let salary = [20000, 250000, 30000, 4500000, 670000, 8999000];
console.log(salary);
console.log(salary.length);
console.log(typeof salary);

console.log(salary[2]);
console.log(salary[89]); // undefined
salary[2] = 900000;

for(let idx = 0; idx < salary.length; idx++){
    console.log(salary[idx]);
}

// for-of loop
for(let el of salary){
    console.log(el);
}