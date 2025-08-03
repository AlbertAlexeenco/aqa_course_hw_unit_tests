/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';
const vowels = "aeiou";
const consonants = "bcdfghjklmnpqrstvwxyz";
let vowelsCount = 0;
let consonantsCount = 0;
let vowelsAndConsonantsResult = '';
const wordLowercase = word.toLowerCase();

for(let i = 0; i < wordLowercase.length; i++){
    if (vowels.includes(wordLowercase[i])){
        vowelsCount++;
    }
    if (consonants.includes(wordLowercase[i])){
        consonantsCount++;
    }
}

vowelsAndConsonantsResult += `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
