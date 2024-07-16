// Task 1 - Bir arrow function yazın ki, verilmiş bir arraydeki ədədlərin kvadratlarını qaytarsın.

let array = [1, 2, 4, 5];
let newArray = [];
let square = () => {
    array.map((value) => {
        newArray.push(value**2);
    });
}

square();
console.log(newArray);




// Task 2 - Bir arrow function yazın ki, iki arrayin götürsün və onların ortaq elementlərini qaytarsın.

// const arrayOne = [12, 56, 34, 25, 90 , 77];
// const arrayTwo = [34, 94, 21, 12, 44 , 77];

// const arrowFunc = () => {
//     arrayOne.filter((value) => {
//         let result = arrayTwo.includes(value);
//         if (result) {
//             console.log(value);
//         }
//     });
// }
// arrowFunc();




// Task 3 - Bir arrow function yazın ki, verilmiş arraydəki cüt ədədləri filtirləsin.

// const array = [12, 88, 21, 125, 85.2, 98];

// const filterEvenNumbers = () => {
//     const result = array.filter(value => value % 2 === 0);
//     return result;
// };

// console.log(filterEvenNumbers());




// Task 4 - Bir arrow function yazın ki, verilmiş arraydəki bütün ədədləri toplayaraq qaytarsın.

// const array = [1, 3, 4, 2, 12];
// let result = 0;
// const addition = () => {
//     array.forEach(value => {
//         result += value;
//     });
// }
// addition();
// console.log(result);




// Task 5 - Bir arrow function yazın ki, verilmiş arraydəki ən böyük ədədi tapsın.

// const array = [20, 42, 99, 93, 12, 53];
// let reslut = 0;
// const findMax = () => {
//     array.forEach(element => {
//         if (element > reslut) {
//             reslut = element;
//         }
//     });
// }
// findMax();
// console.log(reslut);






