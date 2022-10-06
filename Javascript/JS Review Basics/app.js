/**
* --------------------Iteración #1: Mix for e includes------------------
*/
console.log("-----Iteración #1: Mix for e includes-----");

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const moviesCategory = []

for (const movie of movies) {

    for (const key in movie) {

            //console.log(movie['categories']);

            movie['categories'].forEach((category) => {

                if (!moviesCategory.includes(category)) {
                    moviesCategory.push(category)
                }               
            });
            

    }
    //console.log(movie.categories);

    
}

console.log(moviesCategory);

console.log("-----FIN I#1------\n");