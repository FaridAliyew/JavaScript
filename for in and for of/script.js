// Task 1 - Bir obyektdəki bütün mülkiyyətləri konsola çıxarmaq üçün for-in dövrünü istifadə edin.

// const object = {
//     Name: "Alex",
//     Age: 23,
//     City: "New York"
// }

// for (const key in object) {
//     console.log(key + ": " + object[key]);
// }




// Task 2 Bir obyektin içindəki hər bir propertyni kopyalayıb yeni bir obyektdə toplamaq

// let newObject = {};
// const object = {
//     name: "Jon",
//     age: 30,
//     city: "Tokyo"
// };

// for (const key in object) {
//     newObject[key] = object[key];
// }
// console.log(newObject);


// for of loop -----------------
// Task 1 Verilmiş numbers arrayindəki hər bir elementi konsola yazdırın.

// const array = [15, 28, 39, 52, 61];

// for (const value of array) {
//     console.log(value);
// }




// Task 2 Verilmiş words massivindəki hər bir stringin uzunluğunu konsola yazdırın.

// const words = ["apple", "banana", "cherryy", "date"];

// for (const value of words) {
//     console.log(` :${value.length}`);
// }




// Task 3 Verilmiş nums massivindəki rəqəmlərin cəmini tapıb konsola yazdırın.

// let reslut = 0;
// const nums = [10, 20, 30, 40, 50];

// for (const value of nums) {
//     reslut += value;
// }
// console.log(reslut);




// Task 4 Verilmiş people massivindəki obyektlərin hər birinin name dəyərini konsola yazdırın.

// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Jim", age: 35 }
// ];

// for(const key of people){
//     console.log(key.name);
// }




// Task 5 Verilmiş items massivindəki hər bir stringi böyük hərflərə çevirərək yeni bir massivə əlavə edin və yeni massivi konsola yazdırın.

const items = ["pen", "book", "laptop", "phone"];
const newArray = []

for (const value of items) {
    let result = value.charAt(0).toUpperCase() + value.slice(1);
    newArray.push(result);
}
console.log(newArray)



