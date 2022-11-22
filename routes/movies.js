const router = require('express').Router()
const Movie = require('../models/movies.js')

router.get('/', async (req, res) => {
  try {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await Movie.create(req.body)
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:movie_id', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:movie_id', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json(err)
  }
})


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


module.exports = router