const rollDice = (faces) => {
    const num = Math.ceil(Math.random() * faces);
    return num;
}

const faces = 6;
const resultDice = rollDice(faces);

console.log(resultDice);