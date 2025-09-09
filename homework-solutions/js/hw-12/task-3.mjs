// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
//       Пример: 
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona    
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell   
//           email: Shanna@melissa.tv 
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

class jsonPlaceholderApi{

    #baseUrl = `https://jsonplaceholder.typicode.com`;

    endpoints = {
        users : "/users",
        albums: "/albums",
        photos: "/photos",
    }

    async getAllUsers() {
        try{
            const response = await fetch(this.#baseUrl + this.endpoints.users);
            const body = await response.json();
            return body;
        }
        catch(err){
            console.error(err.message);
        }   
    }

    async getAllAlbums() {
        try{
            const response = await fetch(this.#baseUrl + this.endpoints.albums);
            const body = await response.json();
            return body;
        }
        catch(err){
            console.error(err.message);
        }   
    }

    async getAllPhotos() {
        try{
            const response = await fetch(this.#baseUrl + this.endpoints.photos);
            const body = await response.json();
            return body;
        }
        catch(err){
            console.error(err.message);
        }   
    }

    // async getUserBy(field, value) {
    //     try{
    //         if(!["name", "username", "email"].includes(field)) return;
    //         const user = await getAllUsers().find(user => user[field] === user[value]);
    //         return user;
    //     }
    //     catch(err){
    //         console.error(err.message);
    //     }   
    // }

    async printUsersInfo(){
        const users = await this.getAllUsers();
        await users.forEach(({name, email, company }) => {
            console.log(`name: ${name}, \nemail: ${email}, \ncompany: ${company.name}\n`);
        });
    }

    getUserByID(){
        // add
    }

    async getUsersAlbums(){
        const users = await this.getAllUsers();
        const userIds = await users.map(user => user.id);
        
        const albums = await this.getAllAlbums();
        // by id cumva
        //await albums.forEach(album => if(use))
    }

}
    
const api = new jsonPlaceholderApi();
//api.getAllUsers().then(user => console.log(user));
api.printUsersInfo();
api.getUsersAlbums();