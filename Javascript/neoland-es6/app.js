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



