// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, 
// соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

const maximka ={
    name: "Maximka",
    age: 8,
    isCute: true
}

function getKeyByValue<T extends object, U>(obj :T, value: U): keyof T | undefined{
    for(const key in obj){
        if(obj[key] === value){
            return key;
        }
    }
}

console.log(getKeyByValue(maximka, true));
console.log(getKeyByValue(maximka, 16));


//  2. Создайте интерфейс User с полями id (число), username (строка) и email (строка). 
// Затем создайте интерфейс Admin, который расширяет User, добавляя поле role (строка). 
// Напишите функцию, которая принимает массив пользователей и возвращает массив администраторов.
//       [
//         { id: 1, username: "user1", email: "user1@example.com" },
//         { id: 2, username: "admin1", email: "admin1@example.com", role: "superadmin" }
//       ]


// interface IUser{
//     id: number,
//     username: string,
//     email: string
// }

// interface IAdmin extends IUser{
//     role: string
// }

// function getAdmins(list: (IUser | IAdmin)[]) : IAdmin[]{
//     return list.filter(el => isAdmin(el));
// }

// function isAdmin(user: IUser | IAdmin): user is IAdmin{
//    return "role" in user;
// }