/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];


function addCharacter(character) {
   if(typeof(character["name"]) === "string" && typeof(character["age"]) === "number"){
    characters.push(character);
   } else throw new Error('Invalid input');
}
const student = {name: "Alick", age: 99};
addCharacter(student);
console.log(characters);


function getCharacter(name) {
  return characters.find(el => el.name === name  )
}
console.log(getCharacter('Fred'));


function getCharactersByAge(minAge) {
  if(typeof(minAge) !== "number") throw new Error('Invalid input');
  return characters.filter(el => el.age >= minAge);
}
console.log(getCharactersByAge(40));

function updateCharacter(name, newCharacter) {
  const oldCharacter = getCharacter(name);
  if(!oldCharacter) throw new Error('Character not found');
    for(const key in newCharacter){
      oldCharacter[key] = newCharacter[key];}
}
updateCharacter("Alick", {name: "Alberto", salary: 1000000, age: 26});
console.log(characters);


function removeCharacter(name) {
  const charIndex = characters.findIndex(el => el.name === name);
  if(charIndex < 0) throw new Error('Character not found');
  return characters.splice(charIndex,1);
}
//console.log(removeCharacter("Alberto"))
console.log(characters);

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
