// Task 1 -- Sonu 0 ilə bitən bütün 3 rəqəmli ədədləri konsola çıxaran proqram yazın. 

// for (let num = 100; num < 990; num++) {
//     if (num % 10 === 0) {
//         console.log(num);
//     }
// }




// Task 2 -- Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın. 

// let result = 0;
// for (let num = 10; num < 99; num++) {
//     if (num % 2 !== 0) {
//         result += num;
//     }
// }
// console.log("Cəm:", result);




// Task 3 -- İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın. 

// let result = 0;
// const number = Number(prompt("Rəqəmi daxil edin"));

// for (let num = 100; num < 999; num++) {
//     if (num % number === 0) {
//         result += num;
//     }
// }
// console.log("Cəm", result);




// Task 4 -- 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın 

// for (let num = 100; num < 999; num++) {
//     if (num % 7 === 0 && num % 8 === 0) {
//         console.log(num)
//     }
// }




// Task 5 -- 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın 

// let result = 0;
// for (let num = 100; num < 999; num++) {
//     if (num % 7 === 0 && num % 8 === 0) {
//         result+= num;
//     }
// }
// console.log(result);




// Task 6 --  3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın 

// for (let num = 100; num < 999; num++) {
//     if (num % 7 === 0 && num % 8 === 0) {
//         console.log(num);
//         break;
//     }
// }




// Task 7 -- 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın 

// for (let index = 2; index <= 100; index++) {
//     let result = true;

//     for (let i = 2; i <= Math.sqrt(index); i++) {
//         if (index % i === 0) {
//             result = false;
//             break;
//         }

//     }

//     if (result) {
//         console.log(index + " " + "Sadedir")
//     } else{
//         console.log(index + ' ' + "Murekkebdir")
//     }
// }


// Task 8 -- 1-dən 100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın 

// let collection = 0;
// let multiplication = 1;

// for (let index = 1; index <= 100; index++) {
//     if (index % 2 === 0) {
//         collection += index;
//         multiplication *= index;
//     }
// }

// console.log("Collection : " + collection);
// console.log("Multiplication" + multiplication);

// Task 9 Daxil edilən 2 ədəd və operatora əsasən hesablama işi görün. (Switch ilə) Məsələn => a=5 ,b=6 operator --> + olarsa output: 11 

let numberOne = Number(prompt("Birinci reqemi daxil edin"));
let numberTwo = Number(prompt("Ikinci reqemi daxil edin"));
let operation = Number(prompt("Bir emeliyyat secin: 1(+), 2(-), 3(*), 4(/)"));

switch (operation) {
    case 1:
        console.log("Cem : " + (numberOne + numberTwo));
        break;
    case 2:
        if (numberOne > numberTwo) {
            console.log("Ferq : " + (numberOne - numberTwo));
        } else {
            console.log("Ferq : " + (numberTwo - numberOne));
        }
        break;
    case 3:
        console.log("Vurma : " + (numberOne * numberTwo))
        break;
    case 4:
        console.log("Bolme : " + (numberOne / numberTwo));
        break;
}



