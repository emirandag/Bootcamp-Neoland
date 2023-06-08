const fs = require('fs')

const countWords = (text) => {
    let wordCounts = {}
    let words = text.split(/\b/)

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase()
        if (word.match(/\w+/)) {
            if (wordCounts[word]) {
                wordCounts[word]++
            } else {
                wordCounts[word] = 1
            }
        }
    }

    return wordCounts
}

fs.readFile("text.txt", "utf-8", (err, text) => {
    if (err) {
        console.error("Error al leer archivo: " + err);
    } else {
        let wordCounts = countWords(text)
        console.log("Frecuencia de palabras:", wordCounts);
    }
})