const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];

const text = `La nave en la que viaja la princesa Leia es capturada por las tropas imperiales al mando del temible Darth Vader. 
Antes de ser atrapada, Leia consigue introducir un mensaje en su robot R2-D2, 
quien acompañado de su inseparable C-3PO logran escapar. 
Tras aterrizar en el planeta Tattooine son capturados y vendidos al joven Luke Skywalker, 
quien descubrirá el mensaje oculto que va destinado a Obi Wan Kenobi, 
maestro Jedi a quien Luke debe encontrar para salvar a la princesa.`

let newText = text;

const findArrayIndex = (mainCharacters, newText) => {

    mainCharacters.forEach((character, index) => {

        return newText = newText.replaceAll(character, index)

    });

    return newText
}

let result = findArrayIndex(mainCharacters, text)

console.log(result);