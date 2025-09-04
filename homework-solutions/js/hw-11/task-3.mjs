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
    if (typeof value !== "string" || value.length <= 1 || value.length > 50 || !/^[a-zA-Z]+$/.test(value)) throw new Error("Invalid firstName");
    this._firstName = value;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(value){
    if (typeof value !== "string" || value.length <= 1 || value.length > 50 || !/^[a-zA-Z]+$/.test(value)) throw new Error("Invalid lastName");
    this._lastName = value;
  }

  get profession(){
    return this._profession;
  }

  set profession(value){
  //  if (typeof value !== "string" || !value || !/^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(value)) throw new Error("Invalid profession");
    this._profession = value;
  }
  
  get salary(){
    return this.#salary;
  }

  set salary(value){
  //  if (typeof value !== "number"|| Number.isNaN(value) || value <= 0 || value >= 10000) throw new Error("Invalid salary");
    this.#salary = value;
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

class Developer extends Employee {
  
  programmingLanguages = [];
  // super.profession = "Developer";

   constructor(firstName, lastName, salary, language){
    
     //super(firstName, lastName, profession , salary);
     this.programmingLanguages.push(language);
   }
  
  addProgrammingLanguage(language){
    if(!this.programmingLanguages.includes(language) && typeof language === "string") {
      this.programmingLanguages.push(language);
    } else throw new Error("invalid programming language");
  }
}

class Manager extends Employee {
  teamSize;

  increaseTeamSize(){
    return this.teamSize =+ 1; 
  }
}

class Designer extends Employee {
  designTools = [];

  addDesignTool(tool){
    if(!this.designTools.includes(tool)) {
      this.designTools.push(tool);
    }
  }
}

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
      //if (typeof value !== "number") throw new Error("Invalid phone");
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
  
    findEmployeeByName(firstName){
      if (typeof firstName !== "string") throw new Error("Not a String value");
      const employee =  this.getEmployees().find(employee => employee.firstName === firstName);
      if (!employee) throw new Error("Employee with this name was not found");
      return employee;
    }
  
    removeEmployee(firstName){
      return this.#employees.splice(this.getEmployeeIndex(firstName), 1);
    }
  
    getEmployeeIndex(firstName){
      const index = this.#employees.findIndex(emp => emp.firstName === firstName);
      if(index === -1) throw new Error("Employee with this name was not found");
      return index;
    }
  
    getTotalSalary(){
      if (this.#employees.length === 0) {
      return 0;
    } 
      return this.#employees.reduce((sum, {salary}) => sum += salary ,0);
    }
}

const emp1 = new Developer('John', 'Doe', 'Developer', 3000);
const emp2 = new Developer('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Developer('Mark', 'Brown', 'Designer', 4000);

console.log(emp1);

export { Employee, Company, Designer, Developer, Manager };
