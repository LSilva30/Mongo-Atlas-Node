require('dotenv/config')
const mongoose = require('mongoose')

mongoose
    .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
    .then(() => console.log('We are connected to Mongo...'))
    .catch(err => console.log('Could not connect to MongoDB', err))

const movieSchema = mongoose.Schema({
    title: String,
    genre: [String],
    date: {
        type: Date,
        default: Date.now()
    }
})

const Movie = mongoose.model('Movie', movieSchema)

function getAllMovies() {
    Movie.find()
        .then(allMovies => console.log('here are all the movies', allMovies))
        .catch(err => console.log('could not get all movies', err))

}

getAllMovies()