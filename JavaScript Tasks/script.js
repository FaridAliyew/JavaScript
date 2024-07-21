// Task 1 -- Sonu 0 ilə bitən bütün 3 rəqəmli ədədləri konsola çıxaran proqram yazın. 

for (let num = 100; num < 990; num++) {
    if (num % 10 === 0) {
        console.log(num);
    }
}




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