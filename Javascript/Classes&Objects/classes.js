class ToyotaCar {

    constructor(brand, mileaage) {
        console.log("Intializing a new object");
        this.brand = brand;
        this.mileaage = mileaage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 20);
console.log(fortuner);
fortuner.start();

let lexus = new ToyotaCar("lexus", 29);
console.log(lexus);
lexus.stop();