const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');


var usuario = '5904c5de36ae8a0312fd882e';

Users.findById(usuario).then( (items)=> {
	console.log('=================');
	if (!items){
		return console.log("no user found!");
	};
	console.log('users found: ', items);
});




var id = '59188b3f51de5b0b4a63e8c5';

// pass in the id as a string! mongoose will understand
Todo
	.find({
			_id: id	
		})
	.then( (todos) =>{
		
		console.log('Todos',todos);
	});

// find first one
Todo
	.findOne({
		'text': 'second test todo'
		})
	.then( (todo) => {
		console.log('_______________________');
		console.log('Todo just one: ', todo);
	});

// Adventure.findById(id, function (err, adventure) {});
// Todo.findById(id).then( (todo) = > {}); 
Todo.findById( id, (err, todo) => {
	if (err) {
		return console.log('error find by id: ', err);
	}
	console.log('_______________________');
	console.log('Todo by ID: ', todo);
})

// Adventure.findById(id, function (err, adventure) {});

