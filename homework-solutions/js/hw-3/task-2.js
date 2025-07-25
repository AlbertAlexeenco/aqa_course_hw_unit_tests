/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 4; 
let nn = n + "" + n;
let nnn = n + "" + n + "" + n;;

console.log(n + Number(nn) + Number(nnn));

/*
Variant 2

let n = 4;
n = String(n);
let nn = n + n;
let nnn = n + n + n;
console.log(Number(n) + Number(nn) + Number(nnn));

*/
