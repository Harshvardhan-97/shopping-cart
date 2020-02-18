var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uloginSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
password: String,
    cur_date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('ulogin',uloginSchema); 