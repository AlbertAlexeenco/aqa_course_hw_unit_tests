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

    async getAllFromEndpoint(endpoint){
        try{
            const response = await fetch(this.#baseUrl + endpoint);
            const body = await response.json();
            return body;
        }
        catch(err){
            console.error(err.message);
        }   
    }

    async getUserBy(field, value) {
        try{
            if(!["id", "name", "username", "email"].includes(field)) return;
            const user = await getAllFromEndpoint(this.endpoints.users).find(user => user[field] === user[value]);
            return user;
        }
        catch(err){
            console.error(err.message);
        }   
    }

    async printUsersInfo(){
        try{
            const users = await this.getAllFromEndpoint(this.endpoints.users);
            await users.forEach(async ({id, name, email, phone, company }) => {
                const albumsInfo = await this.getUsersAlbums(id).forEach(album => console.log(album.title));
                console.log(`\nname: ${name}, \nemail: ${email},\nphone: ${phone}, \ncompany: ${company.name}, \nalbums: ${ albumsInfo.name}` );
            });
        }  
        catch(err){
            console.error(err.message);
        }   

        }

    async getUsersAlbums(userId){
        try{
            const allAlbums = await this.getAllFromEndpoint(this.endpoints.albums);
            return allAlbums.filter(album => album.userId === userId);
                // .map(album => {
                //     const albumId = album.id;
                //     const photosCounter = this.getPhotosByAlbumId(albumId);
            //  }
            // );
         }
         catch(err){
            console.error(err.message);
        }   
    }

    async getPhotosByAlbumId(albumId){
        const allPhotos = await this.getAllFromEndpoint(this.endpoints.photos);
        const nrOfPhotos= await allPhotos.reduce((count, photo) => {
            if(photo.albumId !== albumId){
                return count;
            } return count += 1;
        } ,0);

        return nrOfPhotos;
    }
}
    
const api = new jsonPlaceholderApi();
//api.getAllUsers().then(user => console.log(user));
api.printUsersInfo();
//api.getUsersAlbums();
//api.getAllAlbums().then(user => console.log(user));
//api.getUsersAlbums(5);
//api.getPhotosByAlbumId(1);





 // async getAllUsers() {
    //     try{
    //         const response = await fetch(this.#baseUrl + this.endpoints.users);
    //         const body = await response.json();
    //         return body;
    //     }
    //     catch(err){
    //         console.error(err.message);
    //     }   
    // }

    // async getAllAlbums() {
    //     try{
    //         const response = await fetch(this.#baseUrl + this.endpoints.albums);
    //         const body = await response.json();
    //         return body;
    //     }
    //     catch(err){
    //         console.error(err.message);
    //     }   
    // }

    // async getAllPhotos() {
    //     try{
    //         const response = await fetch(this.#baseUrl + this.endpoints.photos);
    //         const body = await response.json();
    //         return body;
    //     }
    //     catch(err){
    //         console.error(err.message);
    //     }   
    // }