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



/**
* --------------------Iteración #2: Mix Fors------------------
*/
console.log("-----Iteración #2: Mix Fors-----");

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];


//let sounds = {}

let sumVolumes = 0;
let lengthVolumes = [];



for (const user of users) {
    //console.log(user.favoritesSounds);


    let sounds = user.favoritesSounds;
    

    for (const sound in sounds) {

        let volumes = sounds[sound].volume;
        
        sumVolumes += volumes;

        lengthVolumes.push(volumes);
        
    }
}

console.log(`La suma de todos los valores son: ${sumVolumes}`);
console.log(lengthVolumes.length);

let middleVolumes = sumVolumes / lengthVolumes.length;

console.log(`La media del volumen de todos los sonidos es: ${middleVolumes}`);

console.log("-----FIN I#2------\n");



/**
* --------------------Iteración #3: Mix Fors------------------
*/
console.log("-----Iteración #3: Mix Fors-----");

const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let favorites = []

for (const user of users2) {
    //console.log(user);

    for (const sound in user.favoritesSounds) {
        //console.log(!array.includes(sound), sound);

        //console.log(sound);
        favorites.push(sound);

    }

}

console.log(favorites);

countFavorites = []

favorites.forEach((element => {

    countFavorites[element] = (countFavorites[element] || 0 ) + 1;

}));

console.log(countFavorites);

console.log("-----FIN I#3------\n");



/**
* --------------------Iteración #3: Mix Fors------------------
*/
console.log("-----Iteración #4: Mix Fors-----");

const animales = ['elefante', 'lobo', 'hipopotamo', 'gato']

let textAnimals = 'El elefante es el animal terrestre de mayor tamaño. El gato es un animal considerado mascota. El lobo era el gran cazador de los bosques de Europa. El hipopotamo es uno de los animales vivos más pesados.'
let textModificated = textAnimals
const findArrayIndex = (animales, textModificated) => {
    
    animales.forEach((animal, index) => {return textModificated = textModificated.replaceAll(animal, index) });

    console.log(textModificated);
}

findArrayIndex(animales, textModificated)

console.log("-----FIN I#4------\n");



/**
* --------------------Iteración #5: Función rollDice------------------
*/
console.log("-----Iteración #5: Función rollDice-----")

const rollDice = (diceFaces) => {

    //console.log(Math.ceil(Math.random() * diceFaces))
    return Math.ceil(Math.random() * diceFaces)
}

const resultRollDice = rollDice(6)

console.log(resultRollDice)

console.log("-----FIN I#5------\n")



/**
* --------------------Iteración #6: Función swap------------------
*/
console.log("-----Iteración #6: Función swap-----")

const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

console.log(players);

const swap = (players, indexOne, indexTwo) => {

    if ((indexOne < 0 || indexTwo < 0) && ((indexOne > players.length - 1) || indexTwo > players.length - 1)) {
        
        return `Ninguno de los dos índices son de algún elemento del array`

    } else if ((indexOne < 0) || (indexOne > (players.length - 1))) {

        return `El primer índice: ${indexOne} no pertenece a ningún valor del array`
        
    } else if ((indexTwo < 0) || (indexTwo > (players.length - 1))) {

        return `El segundo índice: ${indexTwo} no pertenece a ningún valor del array`

    } else {

        const copyPlayers = players

        //console.log(copyPlayers[indexOne], copyPlayers[indexTwo])
    
        let elementOne = copyPlayers[indexOne]
        let elementTwo = copyPlayers[indexTwo]
    
        let firstIndex = copyPlayers.indexOf(copyPlayers[indexOne])
        let secondIndex = copyPlayers.indexOf(copyPlayers[indexTwo])
    
        //console.log(firstIndex, secondIndex);
    
        copyPlayers.splice(firstIndex, 1, elementTwo)
        copyPlayers.splice(secondIndex, 1, elementOne)
    
        //console.log(copyPlayers)
    
        return copyPlayers 
    }
}

const playersReplaces = swap(players, 2, 6)

console.log(playersReplaces);

console.log("-----FIN I#6------\n")