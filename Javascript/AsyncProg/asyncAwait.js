/**
-async function always returns a promise.

[  async function myFunc( ) { .... }  ]

-await pauses the execution of its surrounding async function until the promise is settled.

**/

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data..");
            resolve(200);
        }, 2000);
    });
}


async function getWeatherData() {
    await api();
    await api();
}

console.log(getWeatherData());


// Example -2 
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`The given data is ${dataId}`);
            resolve("Success");
        }, 3000);
    });
}

// Async-await
async function getAllData() {
    console.log("getting data1.....");
    await getData(100);
    console.log("getting data2.....");
    await getData(200);
    console.log("getting data3.....");
    await getData(300);
    console.log("getting data4.....");
    await getData(400);
    console.log("getting data5.....");
    await getData(500);
}

console.log(getAllData());