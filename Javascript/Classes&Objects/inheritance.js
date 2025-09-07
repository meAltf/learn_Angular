class Person {
    constructor() {
        this.spicies = "Homo sapiens";
    }

    eat() {
        console.log("I can eat food, fruits.")
    }

    sleep() {
        console.log("I can able to sleep as well for 8 hours.")
    }

    work() {
        console.log("Do nothing!");
    }
}

class Engineer extends Person {
    work() {
        console.log("learn, code, build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let robert = new Engineer();
console.log(robert.work());
console.log(robert.sleep())

let alataf = new Doctor();
console.log(alataf.work());
console.log(alataf.eat());