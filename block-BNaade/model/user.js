var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: {type: String, required: true},
    email: String,
    number: Number
}, {Timestamp: true})

module.exports = mongoose.model('User', userSchema);
