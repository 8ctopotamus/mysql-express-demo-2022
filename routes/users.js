const router = require('express').Router()
const User = require('../models/users.js')

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll()
    res.json(allUsers)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await User.create(req.body)
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:user_id', async (req, res) => {
  try {
    const result = await User.update(req.body, {
      where: {
        id: req.params.user_id
      },
      individualHooks: true, // VERY IMPORTANT - HOOK WILL NOT RUN IF MISSING
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:user_id', async (req, res) => {
  try {
    const result = await User.destroy({
      where: {
        id: req.params.user_id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router