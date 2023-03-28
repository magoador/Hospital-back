const mongoose = require('mongoose')

const userSchemsa = mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    roli: String
})

const User = mongoose.model('User', userSchemsa)

module.exports = User