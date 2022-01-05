const mongoonse = require('mongoose')

const authorSchema = new mongoonse.Schema({
    name:{
        type: String,
        required: true
    }
})

module.exports = mongoonse.model('Author', authorSchema)