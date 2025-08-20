// Начальные данные

import { isReturnStatement, reduceEachLeadingCommentRange } from "typescript";



// Задачи и баллы

// Лайт

// 1️⃣ getPosNegArrays — 1 балл
// Напишите функцию, которая вернёт массив из двух массивов: первый — все положительные числа, второй — все отрицательные (ноль игнорировать).
// Бонус (+1 балл): решение в одно действие (например, в один reduce).

//const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11];

function getPosNegArrays (array = []){
  return array.reduce ((acc, el) => {
    if (el > 0){
      acc[0].push(el); 
    }
    if( el < 0){
      acc[1].push(el); 
    }
    return acc;
  },[[], []])
}

//console.log( getPosNegArrays(numbers));


// 2️⃣ sumPosNeg — 1 балл
// Напишите функцию, которая вернёт массив из двух чисел: сумма положительных и сумма отрицательных.
// Бонус (+1 балл): использовать результат из задачи 1.

//const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11];

function sumPosNeg (array = []){
    // return getPosNegArrays(array).reduce((acc, el, i, arr) => {
    //   let sum = 0;
    //   for(const subEl of el){
    //     sum += subEl;
    //   }
    //   acc.push(sum);
    //   return acc;}
    // ,[])

    return getPosNegArrays(array).map(arr => arr.reduce((sum, num) => sum + num, 0));
}

console.log(sumPosNeg(numbers));

// ⸻

// Мидл

// 3️⃣ getUniqueSortedLengths — 2 балла
// Вернуть массив уникальных длин слов из words, отсортированных по возрастанию.
// Бонус (+1 балл): без использования Set.

//const words = ['apple', 'banana', 'kiwi', 'Avocado', 'grape', 'pear', 'melon', 'plum', 'Mango'];

function getUniqueSortedLengths(array = []){
  return array.map(el => el.length)
  .toSorted((a, b) => a - b)
  .reduce((acc, el) => {
     if(!acc.includes(el)){
      acc.push(el);
    }
    return acc;
  }
  ,[])

  // return array.reduce((acc, el) => {
  //   const len = el.length; 
  //   if(!acc.includes(len)){
  //     acc.push(len);
  //   }
  //   return acc;
  // }
  // ,[])
  // .sort((a, b) => a - b);
}

console.log(getUniqueSortedLengths(words));


// 4️⃣ sumWordsLengthWithoutA — 2 балла
// Вернуть сумму длин всех слов из words, не содержащих букву “a” или “A”.
// Бонус (+1 балл): без регулярных выражений.

const words = ['apple', 'banana', 'kiwi', 'Avocado', 'grape', 'pear', 'melon', 'plum', 'Mango'];

function sumWordsLengthWithoutA(array){
    // return array.filter(el => !(el.toLowerCase().includes("a")))
    // .map(el => el.length)
    // .reduce((sum, i) => sum += i, 0);

    // return array.reduce((sum, i) => {
    //   if(!(el.toLowerCase().includes("a"))){
    //     sum += i.length;
    //   }
    //   return sum;
    // }, 0);

    return array.reduce((sum, el) => (!el.toLowerCase().includes("a") ? sum += el.length : sum )  ,0);
}

console.log(sumWordsLengthWithoutA(words));


// 5️⃣ secondLargest — 2 балла
// Вернуть второе по величине число из массива numbers.
// Бонус (+1 балл): без сортировки.

const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11];

function secondLargest(array = []) {
 return array.reduce((biggestNumber, el) => {
  let secondBiggest;
  for(const number of array){
    if(number > biggestNumber) {
      secondBiggest = biggestNumber;
      biggestNumber = number;
    } 
    if(number < biggestNumber && number > secondBiggest){
      secondBiggest = number; 
    }
  }
  return biggestNumber;
 } , -Infinity);
}

console.log(secondLargest(numbers));

// 6️⃣ getWordsWith — 2 балла
// Функция принимает array, subString, length. Вернуть все слова из array, которые содержат subString и имеют длину больше или равную length.
// Бонус (+1 балл): сделать без учёта регистра.

//const words = ['apple', 'banana', 'kiwi', 'Avocado', 'grape', 'pear', 'melon', 'plum', 'Mango'];

function getWordsWith(array, subString, length){
  // return array.reduce((acc, el, arr) => {
  //   if(subString.length <= el.length && el.toLowerCase().includes(subString.toLowerCase())){
  //     acc.push(el.toLowerCase())
  //   }
  //   return acc;
  // }, [])
  return array.filter(el => length <= el.length && el.toLowerCase().includes(subString.toLowerCase()));
}

console.log(getWordsWith(words, "an", 3));
 
// Хард

// 7️⃣ pipelineNumbers — 3 балла
// Создайте массив функций, каждая из которых принимает число и возвращает изменённое значение.
// Например:
//  • добавить 10
//  • умножить на 2
//  • взять остаток от деления на 7

// Примените этот пайплайн к каждому элементу массива numbers, вернув новый массив.
// Бонус (+1 балл): без цикла for.

function pipelineNumbers(array){
 return array.map(el => el +10).map(el => el *2).map(el => el %7)
}

console.log(pipelineNumbers(numbers));

// ⸻

// Босс

// 8️⃣ maxProductsListByNames (супер-босс) — 5 баллов
// Считаем, что положительные числа из numbers — доходы, отрицательные — расходы. После оплаты всех расходов вычислить остаток и вернуть набор названий товаров из products, который можно купить, начиная с самых дешёвых, чтобы общее количество было максимально возможным.


//const words = ['apple', 'banana', 'kiwi', 'Avocado', 'grape', 'pear', 'melon', 'plum', 'Mango'];
const products = [
  ['bread', 12],
  ['milk', 10.5],
  ['cheese', 5],
  ['apple', 3.8],
  ['banana', 4.2],
  ['chocolate', 3],
  ['coffee', 4.5],
  ['butter', 2.5],
  ['tea', 2],
  ['yogurt', 1.8]
];




function sumWordsLengthWithoutA(array){
    return array.filter(el => !(el.toLowerCase().includes("a"))).map(el => el.length).reduce((sum, i) => sum += i, 0);
}

console.log(sumWordsLengthWithoutA(words));

// 6️⃣ getWordsWith — 2 балла
// Функция принимает array, subString, length. Вернуть все слова из array, которые содержат subString и имеют длину больше или равную length.
// Бонус (+1 балл): сделать без учёта регистра.

function getWordsWith(array, subString, length){
    
}