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
/**
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

*/


// Event listener | node.addEventListener( event, callback ) | node.removeEventListener( event, callback ) 
// Note : the callback reference should be same to remove | while remove event it's most important part

/**
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked- handler2");
});

**/

// add Event listesner demo
btn1.addEventListener("click", () => {
    console.log("button1 was clicked- handle1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked- handle2");
})

const handler3 = () => {
    console.log("button1 was clicked- handle3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked- handle4");
})

// remove Event listener
btn1.removeEventListener("click", handler3);
