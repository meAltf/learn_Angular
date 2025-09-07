class Person {
    constructor(name) {
        console.log("enter parent constructor");
        this.spicies = "Homo sapiens";
        this.name = name;
        console.log("exit parent constructor");
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
    constructor(branch) {
        console.log("enter child constructor");
        super();                                // to invoke parent class constructor
        this.branch = branch;
        console.log("exit child contstructor");
    }
    work() {
        console.log("learn, code, build something");
    }
}

class Doctor extends Person {
    constructor(name) {
        super(name);
    }
    work() {
        super.eat();
        console.log("treat patients");
    }
}

let robert = new Engineer("AI/ML");
console.log(robert.work());
console.log(robert.sleep())

let alataf = new Doctor("alataf");
console.log(alataf);
console.log(alataf.work());