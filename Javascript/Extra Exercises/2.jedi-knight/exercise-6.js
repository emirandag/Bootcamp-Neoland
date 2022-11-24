const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

const fantasticFourMod = [...fantasticFour]

const swap = (indexOne, indexTwo) => {

    let elementOne = fantasticFourMod[indexOne]
    let elementTwo = fantasticFourMod[indexTwo]
    
    fantasticFourMod.splice(indexOne, 1, elementTwo)
    fantasticFourMod.splice(indexTwo, 1, elementOne)
}

swap(0, 1)

console.log(fantasticFourMod);