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


async function printAllInfo(){
    try{
        const [usersResponse, albumsResponse, photosResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/albums"),
            fetch("https://jsonplaceholder.typicode.com/photos"),
        ]);

        if (!usersResponse.ok || !albumsResponse.ok || !photosResponse.ok) {
        throw new Error('Error in receving data from API');
        }

        const [users, albums, photos] = await Promise.all([
            usersResponse.json(),
            albumsResponse.json(),
            photosResponse.json()
        ]);

        users.forEach((user, index ) => {
            console.log(`${index + 1}. name: ${user.name}`);
            console.log(`    email: ${user.email}`);
            console.log(`    phone: ${user.phone}`);
            console.log(`    company: ${user.company.name}`);
            console.log(`    albums: `); 
            
            const userAlbums = albums.filter(album => album.userId === user.id);
            userAlbums.forEach(album => {
                const albumPhotos = photos.filter(photos => photos.albumId === album.id);
                console.log(`      ${album.title} (${albumPhotos.length} photos)`)
            })
        });
    }
    catch(error){
        console.error(error.message);
    }
}

printAllInfo();  