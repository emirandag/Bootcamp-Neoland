/**
* --------------------Iteración #1: Arrows------------------
*/
console.log("-----Iteración #1: Arrows-----");

const sumNumbers = (a = 10, b = 5) => {

    let sum = a + b;

    return `La suma de los número es ${sum}`

}

//1.1
const result = sumNumbers()
console.log(result)

//1.2
const result2 = sumNumbers(8)
console.log(result2)

//1.3
const result3 = sumNumbers(20, 15)
console.log(result3)

console.log("-----FIN I#1------\n");



/**
* --------------------Iteración #2: Destructuring------------------
*/
console.log("-----Iteración #2: Destructuring-----")

//2.1
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game
console.log(`Título del juego: ${title}`)    
console.log(`Genéros: ${gender}`)    
console.log(`Año del juego: ${year}`)

//2.2
const fruits = ['Banana', 'Strawberry', 'Orange']

const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//2.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
}

const {name, race} = animalFunction()
console.log(name)
console.log(race)


//2.4
const car = {nameCar: 'Mazda 6', itv: [2015, 2011, 2020] }

const {nameCar, itv} = car
console.log(nameCar)
console.log(itv)

const [year1, year2, year3] = itv
console.log(year1)
console.log(year2)
console.log(year3)

console.log("-----FIN I#2------\n")



/**
* --------------------Iteración #3: Spread Operator------------------
*/
console.log("-----Iteración #3: Spread Operator-----")

//3.1
const pointsList = [32, 54, 21, 64, 75, 43]

const copyPointsList = [...pointsList]
console.log(copyPointsList)


//3.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copyToy = {...toy}
console.log(copyToy)


//3.3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const pointsList3 = [...pointsList1, ...pointsLis2]
console.log(pointsList3)


//3.4
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToy = {...toy2, ...toyUpdate}
console.log(newToy)


//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColors = [...colors]
console.log(copyColors)

copyColors.splice(2, 1)
console.log(copyColors)

console.log("-----FIN I#3------\n")



/**
* --------------------Iteración #4: Map------------------
*/
console.log("-----Iteración #4: Map-----")


//4.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const mappedUsers = users.map((user) => { return user.name })

console.log(mappedUsers);


//4.2
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const changeNamesStartWithA = users2.map((user) => {

    let userStartWithA = user.name.startsWith('A')
    //console.log(userStarWithA);
    if (userStartWithA) {
        return user.name.replaceAll(user.name, 'Anacleto')
    } else {
        return user.name
    }
    
})

console.log(changeNamesStartWithA);


//4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesVisited = cities.map((city) => city.isVisited ? `${city.name} (Visitado)` : city.name)

console.log(citiesVisited)

console.log("-----FIN I#4------\n")



/**
* --------------------Iteración #5: Filter------------------
*/
console.log("-----Iteración #5: Filter-----")

//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesGreaterEighteen = ages.filter((age) => { if(age > 18) return age })

console.log(agesGreaterEighteen);


//5.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges = ages2.filter((age) => age % 2 === 0 )

console.log(evenAges);


//5.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersGameMorePlayed = streamers.filter((streamer) => { 
    if (streamer.gameMorePlayed === 'League of Legends') return streamer
})

console.log(streamersGameMorePlayed);


//5.4
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersIncludedU = streamers2.filter((streamer) => {

    if (streamer.name.includes('u')) {
        return streamer
    } 

})

console.log(streamersIncludedU)


//5.5
const filteredStreamers = streamers2.filter((streamer) => {

    if (streamer.gameMorePlayed.includes('Legends') && streamer.age > 35) {

        return streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
        
    }

})

console.log(filteredStreamers)

console.log("-----FIN I#5------\n")



/**
* --------------------Iteración #6: Find------------------
*/
console.log("-----Iteración #6: Find-----")

//6.1
const numbers = [32, 21, 63, 95, 100, 67, 43];

const numberFound = numbers.find(number => number === 100)

console.log(`El número encontrado es: ${numberFound}`);


//6.2
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const movieFound = movies.find(movie => movie.date === 2010)

console.log(`La película encontrada es:`, movieFound)


//6.3
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const alienFound = aliens.find(alien => alien.name === 'Cucushumushu')
const mutationFound = mutations.find(mutation => mutation.name === 'Porompompero')

//console.log(alienFound);
//console.log(mutationFound);

const alienWithMutation = {...alienFound, mutation: {...mutationFound}}
console.log(`El alien con mutación es:`, alienWithMutation)


//Segunda opción
const alienWithMutationSO = {...aliens.find(alien => alien.name === 'Cucushumushu'), mutation: {...mutations.find(mutation => mutation.name === 'Porompompero')}}

console.log(`El alien con mutación es:`, alienWithMutationSO)

console.log("-----FIN I#6------\n")



/**
* --------------------Iteración #7: Reduce------------------
*/
console.log("-----Iteración #7: Reduce-----")

//7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumScoresExams = exams.reduce((acc, exam) => acc + exam.score, 0)

console.log(`La suma de las notas de los exámenes es: ${sumScoresExams}`)


//7.2
const sumApprovedExams = exams.reduce((acc, exam) => exam.score >= 5 ? acc + exam.score : acc, 0)

console.log(`La suma de los exámenes aprobados es: ${sumApprovedExams}`)


//7.3
const sumExams = exams.reduce((acc, exam) => acc+exam.score,0)

let middleScoresExams = sumExams/exams.length
console.log(`La media de las notas es ${middleScoresExams}`);

console.log("-----FIN I#7------\n")