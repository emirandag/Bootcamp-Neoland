/**
* --------------------Iteración #2: async-await------------------
*/

//2.1
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

const runTimeOut = async () => {
    await setTimeout(() => {
       console.log('Time out!');
    }, 2000)

}

runTimeOut();


//2.2
const getCharacters = async () => {
    const characters = await fetch('https://rickandmortyapi.com/api/character')
    const charactersJson = await characters.json()
    console.log(charactersJson);
}

getCharacters()