// Task 1
/*Description: Write a function filterByAge that takes an array of objects and a number as input. 
Each object has a property age. 
The function should return a new array with objects where the age property is greater than the given number.
UPDATE:
передавать ключ по которому ищем
*/

const people = [
  { name: "Alice", age: 25 },
  { name: "Alice", age: 35 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];
console.log(filterByAge(people, 26));

function filterByAge(arr, num){
  return arr.filter(el => el.age > num);
}

// Task 2
//  Objective: Implement a simple inventory management system using objects and arrays.
// Implement the following methods within the inventory object:
//  - addItem(item) - Adds a new item to the inventory.
//  - removeItem(id) - Removes an item from the inventory by its id.
//  - getTotalValue() - Returns the total value of the inventory (sum of quantity * price for all items).

const inventory = {
  items: [
    { id: 1, name: "Apple", quantity: 10, price: 1 },
    { id: 2, name: "Banana", quantity: 20, price: 0.5 },
    { id: 3, name: "Pineapple", quantity: 5, price: 1.5 },
  ],

  addItem: function ({ name, quantity, price }) {
    this.items.push({id: this.getNewId(), name, quantity, price});
  },

  getNewId: function() {
    const idArr = this.items.map(item => item.id);
    return Math.max(...idArr) + 1;
  },

  removeItem: function (id) {
    const indexOfObject = this.items.find(item => item.id === id);
    if (indexOfObject === -1) throw new Error("invalid id");
    this.items.splice(indexOfObject + 1, 1);
  },

  getTotalValue: function () {
    return this.items.reduce((sum, {price, quantity}) => price * quantity + sum,0);
  },
};

inventory.addItem({name :"Ion", quantity: 130, price: 100});
inventory.removeItem(1)
console.log(inventory);


// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

// 1. Вывести все предприятия и их отделы.
// Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 сотрудников)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

function logCompanyInfo (enterprises){
  enterprises.forEach(company => {
    const companyName = company.name;
    const totalEmployees = company.departments.reduce((sum, department) => {
      const departmentEmployees = department.employees_count;
      return sum += departmentEmployees;
    },0);
    console.log(`${companyName} (${totalEmployees || "нет"} сотрудников)`);
    company.departments.forEach(({name, employees_count}) => console.log(`- ${name} (${employees_count || "нет" } сотрудников)`));
  });
}

logCompanyInfo(enterprises);


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

function getEnterpriseName(idOrName) {
  const companyFound =  enterprises.find((company) => 
     company.departments.find(({id, name}) =>(id === idOrName || name === idOrName)))
  return companyFound?.name;
}

console.log(getEnterpriseName("Отдел аналитики"));

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

function addEnterprise(name){
  enterprises.push({name});
}

addEnterprise("Huyer buyer");
console.log(enterprises);

// getNewId: function() {
//     const idArr = this.items.map(item => item.id);
//     return Math.max(...idArr) + 1;
//   },

function addNewId(){
 const 
}

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")


// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)
