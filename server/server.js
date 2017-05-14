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

module.exports = {app};
//comments:
// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with . Yeah ! you can do it by yourself as well but using body-parser will do what is required and will save your trouble.

// Now , that was just the summary ; in depth , body-parser gives you a middleware which uses nodejs/zlib to unzip incoming request data if its zipped and stream-utils/raw-body to await full raw content of the request body before "parsing it".

// After having the raw contents , body-parser will parse it using one of the four strategies , depending on specific middleware you decided to use :

// bodyParser.raw() : Does not actually parse the body , but just exposes the buffered up contents from before in a buffer on req.body .
// bodyParser.text() : Reads the buffer as plain text and exposes the resulting string on req.body.
// bodyParser.urlencoded() : Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body. For comparison; in PHP all of this is automatically done and exposed in $_POST.
// bodyParser.json() : Parses the text as JSON and exposes the resulting object on req.body.
// end-comments


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