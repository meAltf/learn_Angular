let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

let student1 = new User("Robert", "robert@google.com");
let student2 = new User("broon", "broon@amazon.com");

let teacher1 = new User("Alataf", "alataf@microsoft.com");

console.log(student1);
console.log(student2.viewData());