const fs = require('fs')

fs.readFile('avengers.json', (err, avengers) => {
    if (err) {
        console.log('There was an error reading the file!')
    } else {
        const parsedAvengers = JSON.parse(avengers)
        console.log(parsedAvengers);
    }
})