const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')

class Review extends Model {}

Review.init({
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [10, 1000]
    }
  }
}, { sequelize })

module.exports = Review