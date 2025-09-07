function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallBack) {
    sumCallBack(a, b);
}

calculator(1, 2, sum);

// all together
calculator(1, 2, (a, b) => {
    console.log(a + b);
});


// callback & callback hell
// A callback is a function passed as an argument to another function.
// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure. | (Pyramid of Doom)
// This style of programming becomes difficult to understand & manage.

function getData(dataId, getNextData) {
    // wait 2 sec
    setTimeout(() => {
        console.log(`Data is ${dataId}`);
        if (getNextData) {
            getNextData();
        }
    }, 3000);
}

getData(1, () => {
    console.log("getting data 2...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3, () => {
            console.log("getting data 4...");
            getData(4, () => {
            });
        });
    });
});