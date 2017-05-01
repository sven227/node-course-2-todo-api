var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// bodyParser.json gives function back = middleware
app.use(bodyParser.json());

app.listen(3000, () => {
	console.log('Started on port 3000');
});

// POST routes - CRUD operations  - URL /todos for creating new todo
app.post('/todos', (req, res) =>{
 console.log(req.body);
 var todo =  new Todo({
 	text: req.body.text
 });
 todo.save().then((doc) =>{
 	res.send(doc);
 }, (e) => {
 	res.status(400).send(e);
 });
});



// var someUser = new Users ({
// 	email: 'sven.gatsos@gmail.com   '
// })

// someUser.save().then( (doc)=>{
// 	console.log('saved New User', doc);
// }, (e)=>{
// 	console.log('unable to save newUser Email', e);
// });
 // var newTodo = new Todo({
 // 	text: 'Cook dinner'
 // });

 // var newTodo = new Todo (
 // {
 // 	text: ' bla bla    '
 
 // });



 // newTodo.save().then( (doc) =>{
 // 	console.log('saved todo', doc);
 // }, (e)=>{
 // 	console.log('unable to save todo', e);
 // });