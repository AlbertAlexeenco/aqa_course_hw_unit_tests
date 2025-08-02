/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
let originalNumber = 10;
while(originalNumber >= 0){
    evenNumbersResult = `${evenNumbersResult} ${originalNumber}`;
    originalNumber -= 2;
}
evenNumbersResult = evenNumbersResult.trimStart().replaceAll(' ', '-');
console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

const smileFace = ":)";
let smilePatternResult = '';
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        smilePatternResult = `${smilePatternResult}${smileFace}`;
    }
    if(i !== 5){
    smilePatternResult = `${smilePatternResult}\n`;
    }
} 
smilePatternResult = smilePatternResult.trimEnd();
console.log(smilePatternResult);

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */

const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';

replaceSpacesWithOneResult = text.replaceAll(' ', '1');
console.log(replaceSpacesWithOneResult);

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
