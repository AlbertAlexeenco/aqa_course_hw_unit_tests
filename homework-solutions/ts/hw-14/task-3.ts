// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов у которых есть как минимум поле salary: number, 
// и возвращается среднее арифметическое зарплат всех переданных объектов

function getAvgSalary<T extends {salary: number}>(...objects: T[] ){
    if(objects.length === 0) return 0;
    const sumOfAllSalaries = objects.reduce((acc, el) => acc +=el.salary ,0);
    return sumOfAllSalaries/objects.length * 100;
}

console.log(getAvgSalary())