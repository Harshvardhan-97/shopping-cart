var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    name:
    { String,
    contact: String,
    unique:false},

    password: String,
    cur_date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('user',userSchema); 