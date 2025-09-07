let btn1 = document.querySelector("#btn1");

/** 
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let num = 23;
    num++;
    console.log(num);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You're under radar😂");
}

**/

// EVENT object | that contains all event related methods and properties
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};