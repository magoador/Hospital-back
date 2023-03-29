const mongoose = require('mongoose')

const uslugaShema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    doctor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Doctor'
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    },
    
})

const Usluga = mongoose.model('Usluga', uslugaShema)

module.exports = Usluga