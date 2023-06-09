const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const MovieModel = require("../models/Movie.model")

const moviesDataSet = [
    {
        title: "The Batman",
        poster: "https://xl.movieposterdb.com/22_02/2022/1877830/xl_1877830_764432ad.jpg?v=2023-02-19%2023:41:01",
        year: 2022,
        released: true
    },
    {
        title: "Dune",
        poster: "https://xl.movieposterdb.com/21_08/2021/1160419/xl_1160419_565d3d10.jpg?v=2023-01-06%2017:55:10",
        year: 2022,
        released: true
    },
    {
        title: "Jaws",
        poster: "https://xl.movieposterdb.com/08_01/1975/73195/xl_73195_04c15a8a.jpg?v=2023-02-25%2009:28:24",
        year: 1975,
        released: false
    }
]

const MovieDocuments = moviesDataSet.map((movie) => new MovieModel(movie))

const MONGO = process.env.MONGO_URI

const createSeed = () => {
    mongoose.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then( async () => {
        const allMovies = await MovieModel.find()

        if (allMovies.length) {
            await MovieModel.collection.drop()
            console.log("colección borrada");
        }
    }).catch((error) => console.log("Error borrado movies", error))
    .then(async() => {
        await MovieModel.insertMany(MovieDocuments)
        console.log("Colección creada");
    }).catch((error) => console.log("Error create collection movies", error))
    .finally(() => {
        mongoose.disconnect()
    })
}

module.exports = createSeed