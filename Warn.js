const mongoose=
require("mongoose");

module.exports=
mongoose.model(

"Warn",

new mongoose.Schema({

guildID:String,

userID:String,

warnings:Array

})

);