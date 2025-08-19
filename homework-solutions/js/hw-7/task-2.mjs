/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if(typeof word !== "string") return false;
  const cleanWord = word.toLowerCase();
  const reversedWord = cleanWord.split('').reverse().join('');
  return (cleanWord === reversedWord); 
}
console.log(isPalindrom('MadAm'));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
   let longest = 0;
   let result = [];
   if(typeof sentence !== "string" || !(sentence.length)) return result;
   const words = sentence.trim().split(/\s+/);
   for (const word of words){
    if(word.length > longest){
      longest = word.length;
      result.splice(0, result.length, word);
    }
    if (word.length === longest && !result.includes(word)){
      result.push(word);
    }
   }
   return result;
}

export { isPalindrom, findLongestWords };
