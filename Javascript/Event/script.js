let btn1 = document.querySelector("#btn1");

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