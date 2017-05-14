const expect = require ('expect');
const request = require('supertest');
// do not need to require mocha

const {app} = require ('./../server');
const {Todo} = require ('./../models/todo');

const todos = [
	{text: 'first test todo'},
	{text: 'second test todo'}
	];

//set up the database so it is empty
beforeEach ((done) => {
		Todo
			.remove( {} )
			.then( () => {
				return Todo.insertMany(todos);
				})
			.then( () => done() );
});

describe ('POST /todos', ()=> {
	it ('should create a new todo', (done) =>{
		var text = 'Test todo Text';
		request(app)
					.post('/todos') 
					.send({text})  //we pass text parsed by supertest
					.expect(200)
					.expect((res) => {
						expect(res.body.text).toBe(text);
					})
	.end ((err,res) =>{
		if (err){ done(err); }
		Todo.find({text}).then((todos)=>{
			expect(todos.length).toBe(1);
			expect(todos[0].text).toBe(text);
			done();
			}).catch((e) => done(e) );
		})
	});
// here in second it supertest we do not send any data which should cause error 400
	it ('should not creat todo with invalid or empty body data', (done) =>{
		request(app)
					.post('/todos')
					.send({})
					.expect(400)
	.end ((err,res) =>{
		if (err) { done (err); };
		Todo.find().then((todos) =>{
			expect(todos.length).toBe(2);
			done();
		}).catch( (e) => done (e) );
	})
	});
});


describe ( 'GET /todos', () => {
	it ('should get all todos', (done) => {
		request(app)
					.get('/todos')
					.expect(200)
					.expect( (res) => {
						expect(res.body.todos.length).toBe(2);
						})
					.end(done);
	});
});