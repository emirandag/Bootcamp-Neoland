const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

const counterFavoriteSound = []

for (const user of users) {
    let sounds = user.favoritesSounds

    //console.log(favoriteSound);

    for (const sound in sounds) {
        
        counterFavoriteSound[sound] = (counterFavoriteSound[sound] + 1) || 1;
        console.log(counterFavoriteSound);
        console.log(counterFavoriteSound[sound]);

    }
}

console.log(counterFavoriteSound);