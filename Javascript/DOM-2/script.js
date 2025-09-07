let div = document.querySelector("div");
console.dir(div);

console.dir(div.innerText);
console.dir(div.innerHTML);

// div.innerText = "sb khatam";
// div.innerHTML= "<div> bs ho gya </div>"

// changes in heading
let heading = document.querySelector("h2");
console.dir(heading);

heading.innerText = "New heading";
heading.innerHTML = "<i> Italic new heading</i>";

// heading.textContent | it will show hidden text as well.