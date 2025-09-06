let str = "robert";
console.log(str[3]);

let obj = {
    item: "macbook",
    cost: 900000
};

// ${obj.item} | it's called as 'string interpolation'
let output = `The item name: ${obj.item} and cost is: ${obj.cost}`; 
let evaluate = `${1+2+4+5}`;
console.log(output + " " + evaluate);
console.log(str.length);
console.log("first line \nnext line");

// string methods
// trim() - remove whitespaces from start and end only not in between
let strg = "    robert alataf   dekhooo     ";
console.log(strg.trim());

// slice(start, end?) | return a part of string
let str1 = "robertAlataf";
console.log(str1.slice(0,6));

// concat(str2); | join two stings
let str2 = "robert";
console.log(str2.concat("123"));

// replace(searchVal, newVal)
let str3 = "alataf";
console.log(str3.replace("a", "A"));

console.log(str3.charAt(2));