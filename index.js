const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/MovieApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
const interstellar = new Movie({
    title: "Interstellar",
    year: 2016,
    score: 9.8,
    rating: "R"
});
Movie.insertMany([
    { title: "Oppenheimer", year: 2023, score: 9.9, rating: "R" },
    { title: "Inception", year: 2018, score: 9.0, rating: "A" },
    { title: "Panchayat", year: 2022, score: 8, rating: "B" },
    { title: "Incidius", year: 2015, score: 10, rating: "C" },
    { title: "GullyBoy", year: 2021, score: 4.0, rating: "D" },
])
    .then(data => {
        console.log("It Worked")
        console.log(data);
    })