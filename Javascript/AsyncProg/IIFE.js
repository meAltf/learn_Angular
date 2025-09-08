/**

IIFE : Immediately Invoked Function Expression

- IIFE is a function that is called immediately as soon as it is defined.

- (function () => {
    //
})();

- (() => {
    //
})();

- (async () => {
    //
})();

**/

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data..");
            resolve(200);
        }, 2000);
    });
}


(async function getWeatherData() {
    await api();
    await api();
    await api();
    await api();
})();

//console.log(getWeatherData());