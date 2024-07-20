// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     displayInfo() {
//         console.log(`
//         Make: ${this.make}
//         Model: ${this.model}
//         Year: ${this.year}
//         `)
//     }
// }

// const carsOne = new Car("BMW", "3 series", 2021);
// const carsTwo = new Car("Nissan", "Altima",2020);
// const carsThree = new Car("Mercedes-Benz","C-Class",2021);

// carsOne.displayInfo();
// carsTwo.displayInfo();
// carsThree.displayInfo();



class Person {
    firstName = "Farid";
    write() {
        console.log("Persondan geldi "+this.firstName);
    }
}

class Student extends Person {
    write() {
        console.log(this.firstName);
        super.write();
    }
}

const personOne = new Student();
personOne.write();


