let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modebtn.addEventListener("click", () => {
    //console.log("You're trying to change the mode");

    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});