var express = require('express')

var bodyParser = require('body-parser')

var mongoose = require("mongoose")
var User = require("./models/user")
//var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/customers')


var app= express()
var puerto = 4000

app.use('/misassets', express.static('assets'))

app.use( bodyParser.urlencoded( {extended:false}) )
app.use( bodyParser.json() )

//app.set('view engine', 'ejs')
app.set('view engine', 'pug')

app.get("/", (req, res)=>{
	//res.send("Hola")
	res.render("index", {nombre:"Ivan"})	//enviamos un parametro
})

app.get("/form_registro", (rep, res)=>{
	res.render("registro")
})

app.get("/:nombre", (req, res)=>{
	var n = req.params.nombre
	res.render("index", {nombre:n})
})

app.post("/registro", (req, res)=>{
	let nombre = req.body.nombre
	let mail = req.body.mail
	let pass = req.body.password

	let  u = new User({nombre:nopmbre, email:mail, password:pass});
	u.save(	(err, usuarioGuardado) =>{
		if(err){
			res.send("error al registrarse")
		}else{
			res.send("registro completado con exito: "+usuarioGuardado.nombre+", "+usuarioGuardado.email)
		}
	})

	res.send("registro completado con éxito"+nombre+" "+mail)
})



app.listen(puerto)