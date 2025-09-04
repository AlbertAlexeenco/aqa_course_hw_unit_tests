class Employee {
  #salary;

  constructor(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  get firstName(){
    return this._firstName;
  }

  set firstName(value){
    this._firstName = value;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(value){
    if (typeof value !== "string" || value.length <= 1 || value.length > 50 || !/^[a-zA-Z]+$/.test(value)) throw new Error("Invalid lastName");
    this._lastName = value;
  }

  get salary(){
    return this.#salary;
  }

  set salary(value){
    if (typeof value !== "number"|| Number.isNaN(value) || value <= 0 || value >= 100000) throw new Error("Invalid salary");
    this.#salary = value;
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

class Developer extends Employee {
   constructor(firstName, lastName, salary, language = []){
     super(firstName, lastName, salary);
     this.programmingLanguages = language;
   }

   get programmingLanguages(){
    return this._programmingLanguages;
  }

  set programmingLanguages(value){
    this._programmingLanguages = value;
  }
  
  addProgrammingLanguage(language){
    if(typeof language !== "string" || this._programmingLanguages.includes(language) || !/^[a-zA-Z]+$/.test(language)) 
      throw new Error ("Language problemo");
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  
  constructor(firstName, lastName, salary, teamSize){
     super(firstName, lastName, salary);
     this.teamSize = teamSize;
  }

  get teamSize(){
    return this._teamSize;
  }

  set teamSize(value){
    this._teamSize = value;
  }

  increaseTeamSize(){
    return this._teamSize += 1; 
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []){
     super(firstName, lastName, salary);
     this.designTools = [...designTools]
  }

  set designTools(value){
    this._designTools = value;
  }

  get designTools(){
    return this._designTools;
  }

  addDesignTool(tool){
    if(typeof tool !== "string" || this._designTools.includes(tool) || !/^[a-zA-Z]+$/.test(tool)) 
      throw new Error ("Design tool problemo");
      this.designTools.push(tool);
  }
}

class Company {
  #employees = [];
  
    constructor(title, phone, address){
      this.title = title;
      this.phone = phone;
      this.address = address;
    }
  
    get title(){
      return this._title;
    }
  
    set title(value){
    //  if (typeof value !== "string") throw new Error("Invalid title");
      this._title = value;
    }
  
    get phone(){
      return this._phone;
    }
  
    set phone(value){
    //  if (typeof value !== "number") throw new Error("Invalid phone");
      this._phone = value;
    }
  
    get address(){
      return this._address;
    }
  
    set address(value){
    //  if (typeof value !== "string") throw new Error("Invalid address");
      this._address = value;
    }

    getEmployees(){
      return this.#employees;
    }
  
    addEmployee(employee){
       if (!(employee instanceof Employee)) throw new Error("Not instance of Employee");
      const foundEmployee =this.getEmployees().find(
        emp => emp.getFullName() === employee.getFullName());
      if (foundEmployee) throw new Error("Employee already added");      
      this.#employees.push(employee);
    }
  
    getInfo(){
      return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`
    }
  
    findEmployeeByName(firstName){
      if (typeof firstName !== "string") throw new Error("Not a String value");
      const employee = this.getEmployees().find(employee => employee.firstName === firstName);
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

    getEmployeesByProfession(profession){
      return this.#employees.filter(emp => emp.constructor.name === profession);
    }
}

  //  const emp1 = new Developer('John', 'Doe', 3000, ["javascript", "1C"]);
  //  const emp2 = new Developer('Andy', 'Gospodi', 5000, "Java");
  //  const emp3 = new Manager('Serj', 'Amalfi', 3500, 11);
  //  const emp4 = new Designer('Dasha', 'Sliva', 5000, "Figma");


  //   const company = new Company('Tech Corp', 123456, 'Main Street');
  //   company.addEmployee(emp1);
  //   company.addEmployee(emp2);
  //   company.addEmployee(emp3);
  //   company.addEmployee(emp4);
  //   console.log(emp1);
  //   console.log(company.getEmployeesByProfession("Developer"));

export { Employee, Company, Designer, Developer, Manager };
