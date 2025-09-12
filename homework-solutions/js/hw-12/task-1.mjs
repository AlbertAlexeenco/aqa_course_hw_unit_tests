// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}
function myCallback() {
    console.log("Коллбэк выполнен через 2 секунды");
}
 delayTwoSeconds(myCallback);

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

let anton = new Promise((resolve, reject) => { 
    resolve(1);
});

anton.then((result) => console.log(result));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const valera = new Promise((resolve, reject) => {
    reject("Promise failed");
}); 

valera.catch((message => console.log(message)));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number){
    return new Promise((res, rej) => {
        res(number);
    })
}

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

const arrayPromises = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];

Promise.all(arrayPromises).then(result => result.forEach(res => console.log(res)));

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled(arrayPromises).then(result => result.forEach(res => console.log(res)));

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function promiseAllAsync(arr) {
    try{
        Promise.all(arrayPromises).then(result => result.forEach(res => console.log(res)));
    } catch(error) {
        console.error("Ups I did it again")
    }
} 

promiseAllAsync(arrayPromises);

async function promiseAllSettledAsync(arr) {
    try{
        Promise.allSettled(arrayPromises).then(result => result.forEach(res => console.log(res)));
    } catch(error) {
        console.error("Ups I did it again");
    }
} 

promiseAllSettledAsync(arrayPromises);