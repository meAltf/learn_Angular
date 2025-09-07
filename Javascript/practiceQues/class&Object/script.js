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

class Admin extends User {

    editData() {
        DATA = "The secret infromation after edited by admin";
    }
}

let student1 = new User("Robert", "robert@google.com");
let student2 = new User("broon", "broon@amazon.com");

let teacher1 = new User("Alataf", "alataf@microsoft.com");

console.log(student1);
console.log(student2.viewData());

let admin1 = new Admin("admin1", "admin1@gmail.com");
console.log(admin1);
admin1.editData();
console.log(`After change: ${DATA}`);
