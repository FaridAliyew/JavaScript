// Task 1 (Verilmiş boş bir arraydə (məsələn, myArray) bir-birinin ardınca 3 müxtəlif string elementi push` metodu istifadə edərək əlavə edin.)
const myArray = [];

let stringOne = "Alex";
let stringTwo = "Simon";
let stringThree = "Mayk";

myArray.push(stringOne, stringTwo, stringThree);

console.log(myArray);




// Task 2 (numbers adlı bir arraydə (məsələn, [1, 2, 3]`) əvvəlcə bir ədəd, sonra isə 2 fərqli string əlavə edin.)

// const numbers = [21, 34, 63, 78];
// numbers.push(99, "Mike", "Tyson");
// console.log(numbers);




// Task 3 (İki arrayin birləşdirilməsini təmin edən bir funksiya yazın. Bu funksiyaya verilmiş iki arrayin bütün elementlərini ilk arrayə push` metodu ilə əlavə edin.)

// function myFunc() {
//     const firstArray = [12, 45, 34, 86, 20];
//     const twoArray = [null, undefined, null];
//     firstArray.push(...twoArray);
//     console.log(firstArray);
// }
// myFunc();




// Task 4: (Bir array-də 5 fərqli obyekt əlavə edin. Hər bir obyektin name və value adlı iki özəlliyi olsun.)

// const array = [];

// let object1 = {
//     name: "mario",
//     vlue: 32
// }

// let object2 = {
//     name: "Alex",
//     value: 22
// }

// let object3 = {
//     name: "Mike",
//     value: 50
// }
// let object4 = {
//     name: "Nick",
//     value: 45
// }
// let object5 = {
//     name: "Toms",
//     value: 43
// }
// array.push(object1, object2, object3, object4, object5);
// console.log(array);





// Task 5: (Verilmiş array-də əvvəldən boş stringlərin sayını artıraraq hər dəfə push metodu ilə yeni bir boş string əlavə edin. Taskı icra edərkən array-in son vəziyyətini göstərən bir funksiya yazın.)

// const array = [];
// function myFunc() {
//     for (let index = 0; index <= 4; index++) {
//         array.push("");
//     }
// }
// myFunc();
// console.log(array);


