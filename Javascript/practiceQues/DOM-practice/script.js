let headingH2 = document.querySelector("h2");
console.dir(headingH2);

headingH2.innerText += " from India";

// problem statemetn-2
let divs = document.querySelectorAll(".box");
// divs[0].innerText= "new unique div";
// divs[1].innerText="new unique div2";
// divs[2].innerText="new unique div3";

// for(let i =0; i<divs.length; i++){
//     divs[i].innerText = "new unique div " + i + " check";
// }


let idx = 0;
for(let div of divs){
    div.innerText = `new unique div value ${idx}`;
    idx++;
}