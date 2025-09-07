class ToyotaCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
fortuner.start();

let lexus = new ToyotaCar();
lexus.setBrand("lexus");
lexus.start();