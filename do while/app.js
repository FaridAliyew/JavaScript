// Task 1 (1-20 yə qədər tək rəqəmlərin cəminin hesablanması)

let number = 1;
let result = 0;
do {
    if (number % 2 !== 0) {
        result+= number;
    }
    number++;

} while (number <= 20);
console.log(result);




// Task 2 (Vurma cədvəli)

// let say = 1;
// do {
//     for (let index = 1; index <= 10; index++) {
//         let vurma = say + " x " + index + " = " + (say*index);
//         console.log(vurma);
//     }
//     say++;
//    console.log("--------------------");
// } while (say <= 10);




// Task 3 (Sadə ədədin təyin olunması)

// const number = Number(prompt("Bir rəqəm daxil edin"));
// let result = true
// if (number != "" && number != null) {
//     let index = 2;
   
//     do {
//         if (number % index === 0) {
//             result = false;
//             break;
//         }

//         index++;
//     } while (index <= 7);
// }

// if (result) {
//     console.log("Bu sadə ədəddir" + " " + number);
// } else {
//     console.log("Bu sadə ədəd deyil" + " " + number);
// }






