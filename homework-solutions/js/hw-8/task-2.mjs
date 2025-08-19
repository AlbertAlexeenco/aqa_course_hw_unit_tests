/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function countVowels(word){
  return word.split("").reduce((res, el) => ("aeiouAEIOU".includes(el)) ? res +1 : res, 0);  
}

function sortedByVowels(wordsArr = []) {
  return wordsArr.sort((a,b) => countVowels(a) - countVowels(b));
}

console.log(sortedByVowels(words));

export { sortedByVowels };
