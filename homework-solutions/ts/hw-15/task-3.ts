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

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

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

interface IEntity{
    id: number,
    name: string,
    getTotalEmployees():number;
    editName(newName:string):void;
}
interface IDepartment extends IEntity{
    employees_count:number,
}
interface ICompany extends IEntity {
    departments: IDepartment[]
}
class Department implements IDepartment{
    constructor(public readonly id:number, public name:string, public employees_count:number){}
    printDeptInfo(){
        console.log(`- ${this.name} (${this.getTotalEmployees() || "нет"} сотрудников)`)
    }
    getTotalEmployees(): number{
        return this.employees_count;
    }
    editName(newName:string){
        this.name = newName;
    }
    editEmployeesCount(newEmployees_count:number){
        this.employees_count = newEmployees_count;
    }
    addEmployees(number:number){
        this.employees_count += number;
    }
}
class Company implements ICompany{
    departments: Department[];
    constructor (public readonly id:number, public name:string, departments: Department[]){
        this.departments = [...departments]
    }
    printCompanyInfo(){
        console.log(`${this.name} (${this.getTotalEmployees() || "нет"} сотрудников)`);
        this.departments.forEach(dept => dept.printDeptInfo());
    }
    getTotalEmployees():number{
        return this.departments.reduce((sum, dept) => {
            return sum += dept.getTotalEmployees();
        }, 0);
    }
    editName(newName:string){
        this.name = newName;
    }
    addDepartment(name:string){
        this.departments.push(new Department(this.getNewDepartmentId() ,name, 0))
    }
    findDepartmentByID(id:number):Department| undefined{
        return this.departments.find(dept => id === dept.id);
    }
    deleteDepartment(id:number){
        const indexOfDepartment = this.departments.findIndex(dept => dept.id === id);
        if(indexOfDepartment !== -1 && this.departments[indexOfDepartment].getTotalEmployees() === 0){
            this.departments.splice(indexOfDepartment, 1);
        }
    }
    moveEmployees(fromId:number, toId:number){
        let fromDepartment = this.findDepartmentByID(fromId);
        let fromDeptEmployeesNr:number = 0;
        if(fromDepartment) fromDeptEmployeesNr = fromDepartment.getTotalEmployees();
        let toDepartment = this.findDepartmentByID(toId);
        if(toDepartment && fromDeptEmployeesNr){
            toDepartment.editEmployeesCount((toDepartment.getTotalEmployees() + fromDeptEmployeesNr));
            fromDepartment?.editEmployeesCount(0);
        }
    }
    protected getNewDepartmentId(): number {
        if (this.departments.length === 0) {
            return 1;
        } else return this.departments.length + 1;
    }
}
class Enterprise{
    protected enterprise:Company[] = [];
    constructor(companies:Company[]){
        this.enterprise = [...companies]
    }
    printEnterpriseInfo(){
        this.enterprise.forEach(comp => comp.printCompanyInfo());
    }
    getEnterpriseName(nameOrId:string | number):string{
        const companyFound = this.enterprise.find(({id, name}) =>(id === nameOrId || name === nameOrId));
        if(!companyFound) throw new Error("Company not found") ;
        return companyFound.name;
    }
    addEnterprise(name:string){
        this.enterprise.push(new Company(this.getNewEnterpriseId() ,name,[]))
    }
    protected getNewEnterpriseId(): number {
        if (this.enterprise.length === 0) {
        return 1;
        } else return this.enterprise.length + 1;
    }
    addDepartment(id:number, name:string){
        this.findCompanyById(id).addDepartment(name);
    }
    protected findCompanyById(id:number){
        const found = this.enterprise.find(company => company.id === id);
        if (!found) throw new Error("id not found");
        return found;
    }
    editEnterprise(id:number, newName:string){
        this.findCompanyById(id).editName(newName);
    }
    editDepartment(id:number, newName:string){
        this.findDepartmentById(id).editName(newName);
    }
    protected findDepartmentById(id:number){
        let found:Department | undefined;
        for (const company of this.enterprise){
            found = company.findDepartmentByID(id);
        if (found) return found;
        }
        if (!found) throw new Error("id not found");
        return found;
    }
    deleteEnterprise(id:number){
        this.enterprise.splice(this.getIndexOfCompany(id), 1);
    }
    protected getIndexOfCompany(id:number): number{
        const indexOfCompany = this.enterprise.findIndex(company => company.id === id);
        if (indexOfCompany === -1) throw new Error("id not found");
        return indexOfCompany;
    }
    deleteDepartment(id:number){
        for (const company of this.enterprise){
            company.deleteDepartment(id);
        }
    }
}
    const zavod = new Department(1.1, "zavod", 15);
    zavod.printDeptInfo();
    const mircos = new Company(1, "Mircos & sons", [zavod]);
    mircos.printCompanyInfo();