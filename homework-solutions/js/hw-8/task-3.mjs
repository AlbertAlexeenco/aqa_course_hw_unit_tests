/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  return numbers.sort((a, b) => a - b)
  .reduce((res, el, i, arr) =>{
    if(res !== null){
       return res;
    }
    if (el !== i+1) {
      res = i+1;
    } 
    if(res === null && el === arr[arr.length-1]){
      res = arr.length+1;
    }
    return res;
  } , null);
  }

const arr = [1,2,3]
console.log(findMissingNumber(arr));
console.log(arr);

export { findMissingNumber };
