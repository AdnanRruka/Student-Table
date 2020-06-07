const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        city: {
            type: String,
        },
        street: {
            type: String,
        },
        zipcode: {
            type: String,
        }
    }
})

module.exports = mongoose.model('Student', studentSchema)