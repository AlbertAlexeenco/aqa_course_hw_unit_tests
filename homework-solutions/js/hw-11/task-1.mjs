class Employee {
  
  #salary;

  constructor(firstName, lastName, profession, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName(){
    return this._firstName;
  }

  set firstName(value){
    if (typeof value !== "string") throw new Error("Invalid firstName");
    this._firstName = value;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(value){
    if (typeof value !== "string") throw new Error("Invalid lastName");
    this._lastName = value;
  }

  get profession(){
    return this._profession;
  }

  set profession(value){
    if (typeof value !== "string") throw new Error("Invalid profession");
    this._profession = value;
  }
  
  get salary(){
    return this.#salary;
  }

  set salary(value){
    if (typeof value !== "number" || value < 0) throw new Error("Invalid salary");
    this.#salary = value;
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100


class Company {
  
  #employees = [];

  constructor(title, phone, address, salary){
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

  get title(){
    return this._title;
  }

  set title(value){
    if (typeof value !== "string") throw new Error("Invalid title");
    this._title = value;
  }

  get phone(){
    return this._phone;
  }

  set phone(value){
    if (typeof value !== "number") throw new Error("Invalid phone");
    this._phone = value;
  }

  get address(){
    return this._address;
  }

  set address(value){
    if (typeof value !== "string") throw new Error("Invalid address");
    this._address = value;
  }

  addEmployee(employee){
    if (!(employee instanceof Employee)) throw new Error("Not instance of Employee");
    this.#employees.push(employee);
  }

  getEmployees(){
    return this.#employees;
  }

  getInfo(){
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`
  }

}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp3 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp3);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo());

export { Employee, Company };
