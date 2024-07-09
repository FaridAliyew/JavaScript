// Task 1 (1 dən 50-ə qədər ədədlərin cəminin tampılması)

let toplama = 1;
for (let index = 50; index >= 1; index--) {
    toplama += index;
    console.log(index);
}

console.log("Toplam :" + " " + toplama);




// Task 2: (1-dən 100-ə qədər olan cüt ədədləri çap edin)

// for (let index = 1; index <= 100; index++) {
//     if(index%2==0){
//         console.log(index);
//     }
// }




// Task 3: (Array-dan elementləri çap edin)

// const array = [12, 34, 54, 23, 21, 89];

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }




// Task 4: (Array-dakı ən böyük elementi tapın)

// let array = [34, 57, 92, 43, 65, 99];

// let max = array[0];

// for (let index = 1; index < array.length; index++) {
//     if (array[index] > max) {
//         max = array[index]; 
//     }
// }

// console.log("Ən böyük element: " + max);




// Task 6: (Array-dakı mənfi ədədlərin sayını tapın)

// const array = [56, -21, -43, 12, 75, -71];
// let counter = 0
// for (let index = 0; index < array.length; index++) {
//     if (array[index] < 0) {
//        counter++; 
//        console.log(counter);
//     }
// }




// Task 7: Fibonacci sırasını yaradınTask 7: Fibonacci sırasını yaradın

// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci sırası:');
// console.log(n1);
// console.log(n2);

// for (let i = 3; i <= 10; i++) { 
//     nextTerm = n1 + n2;
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
// }