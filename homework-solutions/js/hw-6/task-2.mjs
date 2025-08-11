/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const resultUnique = [];
let resultNull;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let countDiffPizzas1 = 0;
let countDiffPizzas2 = 0;

for(const pizza of competitorPizzas){
  competitorPizzas.splice(competitorPizzas.indexOf(pizza), 1 , pizza.toLowerCase());
}

for(const pizza of myPizzasT1){
  if(!competitorPizzas.includes(pizza.toLowerCase()) ){
    countDiffPizzas1++;
    resultUnique.push(pizza);
  }
}
if(!countDiffPizzas1){
  resultNull = null;
}

for(const pizza of myPizzasT2){
  if(!competitorPizzas.includes(pizza.toLowerCase()) ){
    countDiffPizzas2++;
    resultUnique.push(pizza);
  }
}
if(!countDiffPizzas2){
  resultNull = null;
}

export { resultNull, resultUnique };
