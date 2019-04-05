const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const schema = new mongoose.Schema({
    name: String,
    email : String,
    googleId : String,
    profile: Object
})

schema.plugin(findOrCreate)

module.exports = mongoose.model('User', schema);

