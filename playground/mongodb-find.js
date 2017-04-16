//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
 
	if (err) {
		return console.log('unable to connect to MongoDB server');

	}
	console.log('Hi Sven, connected to MongoDB server');

	/*db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=>{
		console.log('Unable to fetch Todos', err);
	});*/

	db.collection('Users').find({name: 'sven'}).toArray().then((docs)=>{
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=>{
		console.log('Unable to fetch Docs', err);
	});


	db.close();

});