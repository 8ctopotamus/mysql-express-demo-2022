require('dotenv').config()
const express = require('express')
const sequelize = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3001
const isProduction = process.env.NODE_ENV === "production"

app.use(express.json())



app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
  sequelize.sync({ force: !isProduction }).then(() => {
    console.log('Sequelize connected!')
  })
})












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