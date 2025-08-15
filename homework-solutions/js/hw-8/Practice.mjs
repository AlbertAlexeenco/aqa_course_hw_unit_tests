// Начальные данные

import { isReturnStatement } from "typescript";



// Задачи и баллы

// Лайт

// 1️⃣ getPosNegArrays — 1 балл
// Напишите функцию, которая вернёт массив из двух массивов: первый — все положительные числа, второй — все отрицательные (ноль игнорировать).
// Бонус (+1 балл): решение в одно действие (например, в один reduce).

// 2️⃣ sumPosNeg — 1 балл
// Напишите функцию, которая вернёт массив из двух чисел: сумма положительных и сумма отрицательных.
// Бонус (+1 балл): использовать результат из задачи 1.

// ⸻

// Мидл

// 3️⃣ getUniqueSortedLengths — 2 балла
// Вернуть массив уникальных длин слов из words, отсортированных по возрастанию.
// Бонус (+1 балл): без использования Set.

// 4️⃣ sumWordsLengthWithoutA — 2 балла
// Вернуть сумму длин всех слов из words, не содержащих букву “a” или “A”.
// Бонус (+1 балл): без регулярных выражений.

// 5️⃣ secondLargest — 2 балла
// Вернуть второе по величине число из массива numbers.
// Бонус (+1 балл): без сортировки.

// 6️⃣ getWordsWith — 2 балла
// Функция принимает array, subString, length. Вернуть все слова из array, которые содержат subString и имеют длину больше или равную length.
// Бонус (+1 балл): сделать без учёта регистра.

// ⸻

// Хард

// 7️⃣ pipelineNumbers — 3 балла
// Создайте массив функций, каждая из которых принимает число и возвращает изменённое значение.
// Например:
//  • добавить 10
//  • умножить на 2
//  • взять остаток от деления на 7

// Примените этот пайплайн к каждому элементу массива numbers, вернув новый массив.
// Бонус (+1 балл): без цикла for.

// ⸻

// Босс

// 8️⃣ maxProductsListByNames (супер-босс) — 5 баллов
// Считаем, что положительные числа из numbers — доходы, отрицательные — расходы. После оплаты всех расходов вычислить остаток и вернуть набор названий товаров из products, который можно купить, начиная с самых дешёвых, чтобы общее количество было максимально возможным.

const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11];
const words = ['apple', 'banana', 'kiwi', 'Avocado', 'grape', 'pear', 'melon', 'plum', 'Mango'];
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

// 3️⃣ getUniqueSortedLengths — 2 балла
// Вернуть массив уникальных длин слов из words, отсортированных по возрастанию.
// Бонус (+1 балл): без использования Set.


// function getUniqueSortedLengths(array){
//    const wordLength = array.map(el => el.length);
//    const uniqueLength = wordLength.reduce((res, i) => {
//     if (!res.includes(i)) {
//     res.push(i);
//   }
//   return res;
// }, []);
//     return uniqueLength.toSorted((a,b) => a - b);;
// }

function getUniqueSortedLengths(array){
   return array.map(el => el.length)
   .reduce((res, i) => {
    if (!res.includes(i)) {
    res.push(i);
  }
  return res;
}, [])
.sort((a,b) => a - b);
}

console.log(getUniqueSortedLengths(words));


// 4️⃣ sumWordsLengthWithoutA — 2 балла
// Вернуть сумму длин всех слов из words, не содержащих букву “a” или “A”.
// Бонус (+1 балл): без регулярных выражений.

function sumWordsLengthWithoutA(array){
    return array.filter(el => !(el.toLowerCase().includes("a"))).map(el => el.length).reduce((sum, i) => sum += i, 0);
}

console.log(sumWordsLengthWithoutA(words));

// 6️⃣ getWordsWith — 2 балла
// Функция принимает array, subString, length. Вернуть все слова из array, которые содержат subString и имеют длину больше или равную length.
// Бонус (+1 балл): сделать без учёта регистра.

function getWordsWith(array, subString, length){
    
}