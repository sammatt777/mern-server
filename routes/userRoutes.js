const express = require('express')
const { postUser } = require('./controllers')
const userRoutes = express.Router()




userRoutes.route('/user').post(postUser)



module.exports = userRoutes
