var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: String,
    email: String,
    age: Number
});

module.exports = mongoose.model('Student', studentSchema);
