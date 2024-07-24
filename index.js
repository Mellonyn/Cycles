

// alert("Подсчитать сумму всех чисел в заданном пользователем диапазоне. ")

// let num1 = +(prompt("Write first number"));
// let num2 = +(prompt("Write second number"));
// let sum = 0;

// for (let i = num1; i <= num2; i++) {
//  sum = sum + i;
// }

// alert(sum);







// let num1 = +(prompt("Первое число"));
// let num2 = +(prompt("Второе число"));
// let delit = 0;
// let nod = 0;

// if (num1 > num2) {
//     nod = num2;
// }
// else {
//     nod = num1;
// }

// for (let i = nod; i > 0; i--) {
//     let a = num1 % i;
//     let b = num2 % i;

//     if (a == 0 && b == 0) {
//         delit = i;  
//         break;
//     }
// }

// alert(delit);







// let num1 = +(prompt("Введите число"));
// let delit = 0;

// for (let i = num1; i > 0; i--) {
//     let a = num1 % i;

//     if (a == 0) {
//         delit = i;
//         alert(delit);
//     }
// }




// let num = prompt ("Write number");
// let i = 0;

// do {
//     i ++;
// } while (num[i] != undefined) {
//     alert(i);
// }




// let all = 0;
// let positive = 0;
// let negativ = 0;
// let odd = 0;
// let even = 0;
// let zero = 0;

// for(let i = 1; i <= 10; i++) {
//     vse = +prompt ("Write number");
//     if (all > 0) {
//         positive ++;
//     }
//     if (all < 0){
//         negative ++;
//     }
//     if (all % 2 == 0 ) {
//         even ++;
//     }
//     if (all % 2 != 0) {
//         odd ++;
//     }
//     if (all === 0) {
//         zero ++;
//     }
// }

// alert ("Положительных - " + positive + " Отрицательных - "+ negative" Нулей - " + zero + minus + " Четных - " + even + " Не Четных - " + odd  );






// do {
//     let num1 = +prompt ("Введите первое число");
//     let num2 = +prompt ("Введите второе число");
//     let znak = prompt ("Введите знак")

//     if(znak == "+") {
//         alert(num1+num2);
//     }
//     else if(znak == "-") {
//         alert(num1-num2);
//     }
//     else if(znak == "/") {
//         alert(num1/num2);
//     }
//     else if(znak == "*") {
//         alert(num1*num2);
//     }
//     else {
//         alert("Warning");
//     }
// } while (confirm ("Хотите продолжить?"));





// let num = prompt("Введите число");
// let pad = prompt("На сколько хотите сдвинуть");
// let i = 0;

// do {
//     i = i+1;

// } 
// while (num[i] != undefined) {
//     let left = "";
//     let right = "";
//     for (y = 0; y < i; y++) {
//         if (y < pad) {
//             left += num[y];
//         }
//         else {
//             right += num[y];
//         }
//     }
//     alert(right + left);
// }





// let i = 0;

// do {
//     let one = "Понедельник";
//     let two = "Вторник";
//     let three = "Среда";
//     let four = "Четрвег";
//     let five = "Пятница";
//     let six = "Суббота";
//     let seven = "Воскресение";

//     if (i == 0) {
//         alert(one);
//     }
//     else if (i == 1) {
//         alert(two);
//     }
//     else if (i == 2) {
//         alert(three);
//     }
//     else if (i == 3) {
//         alert(four);
//     }
//     else if (i == 4) {
//         alert(five);
//     }
//     else if (i == 5) {
//         alert(six);
//     }
//     else if (i == 6) {
//         alert(seven);
//         i = -1;
//     }

//     i++;
// } while (confirm ("Хотите продолжить?"));




// for (let i = 2; i <=9; i++) {
//     for (let y = 1; y <=10; y++) {
//         alert(y*i);
//     }
// }





