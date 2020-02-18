var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var loginSchema = new Schema({
    email: {
        type: String,
        unique: false
    },
    password: String,
    cur_date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('adminlogin',loginSchema); 