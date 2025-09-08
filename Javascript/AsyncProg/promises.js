/**
Promises
- Promise is for “eventual” completion of task. It is an object in JS.
- It is a solution to callback hell.

let promise = new Promise( (resolve, reject) => { .... } )

Function with 2 handlers
- resolve & reject are callbacks provided by JS

**/

/**
- A JavaScript Promise object can be:
    Pending : the result is undefined
    Resolved : the result is a value (fulfilled) | resolve( result )
    Rejected : the result is an error object | reject( error )

- Promise has state (pending, fulfilled) & some
- result (result for resolve & error for reject).
**/


let promise1 = new Promise((resolve, reject) => {
    console.log("I am a promise");
});
console.log(promise1);

let promise2 = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
});
console.log(promise2);

let promise3 = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("Some Error Occured!");
});
console.log(promise3);


// Example : 2

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Given dataId is ${dataId}`);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

/**

- .then( ) & .catch( )

promise.then( ( res ) => { .... } )
promise.catch( ( err ) ) => { .... } )

**/



/**
const getPromiseRes = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
    });
}

let promiseRes = getPromiseRes();
promiseRes.then((res) => {
    console.log("promise fulfilled", res);
});

const getPromiseRej = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        reject("Network Error!");
    });
}

let promiseRej = getPromiseRej();
promiseRej.catch((res) => {
    console.log("promise rejected", res);
});

**/

// Promises chaining demo
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => { });
// });

// simplify above code
console.log("fetching data1...");
asyncFunc1().then((res) => {
    console.log("fetching data2...");
    asyncFunc2().then((res) => { });
});


// Demo | promise chain
// getData(100).then((res) => {
//     console.log(res);
//     getData(2000).then(() => {
//         console.log(res);
//     });
// });

// cleanest way to write promise-chain | same above code
getData(3000)
    .then((res) => {
        return getData(4000);
    })
    .then((res) => {
        return getData(5000);
    })
    .then((res) => {
        console.log(res);
    })