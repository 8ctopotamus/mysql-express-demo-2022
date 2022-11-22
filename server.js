require('dotenv').config()

const sequelize = require('./config/connection')
// const Movie = require('./models/movies.js')

// sequelize.sync({ force: true }).then(async () => {
//   console.log('DB refreshed!')

//   // CREATE
//   await Movie.create({ name: "Fido" })

//   await Movie.bulkCreate([
//     { name: "Inception" },
//     { name: "Shawshank" },
//     { name: "Forrest Gump" },
//     { name: "Fight Club" },
//     { name: "Ace Ventura: Pet Detective" },
//     { name: "The Matrix" }
//   ])

//   // READ
//   // const allMovies = await Movie.findAll()
//   // console.log(allMovies)
//   // const fido = await Movie.findByPk(1)
//   // console.log(fido)

//   // UPDATE
//   await Movie.update({ name: "Star Wars" }, {
//     where: {
//       name: "Inception"
//     }
//   })

//   await Movie.update({ name: "Six String Samurai"}, {
//     where: {
//       id: 3
//     }
//   })

//   // DELETE
//   await Movie.destroy({
//     where: {
//       id: 1
//     }
//   })

//   const allMovies = await Movie.findAll()
//   console.log(allMovies)


// })