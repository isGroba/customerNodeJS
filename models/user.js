
var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchemaJSOM={
	
	nombre:String,
	email:String,
	password:String,
	edad:Number,
	fecha_Nac:Date,
	sexo:String
}
var userSchema = new Schema(userSchemaJSOM)
var User = mongoose.model('User', userSchema)

module.exports = User