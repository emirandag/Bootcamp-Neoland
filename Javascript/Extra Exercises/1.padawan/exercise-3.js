const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  const smallMovie = []
  const mediumMovie = []
  const bigMovie = []

  movies.forEach(movie => {
    
    if (movie.durationInMinutes < 100) {
        smallMovie.push(movie)
    } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
        mediumMovie.push(movie)
    } else {
        bigMovie.push(movie)
    }

  });

  console.log("Película pequeña:" , smallMovie);
  console.log("Película mediana:" , mediumMovie);
  console.log("Película grande:" , bigMovie);