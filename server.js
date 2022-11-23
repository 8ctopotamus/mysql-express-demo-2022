require('dotenv').config()
const express = require('express')
// TODO: import your sequelize connection
// TODO: import your routes

const app = express()
const PORT = process.env.PORT || 3001
const isProduction = process.env.NODE_ENV === "production"

app.use(express.json())

// TODO: Use your routes here

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
  // TODO: sync your sequelize models here
})