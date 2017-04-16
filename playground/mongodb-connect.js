//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
 
	if (err) {
		return console.log('unable to connect to MongoDB server');

	}
	console.log('Hi Sven, connected to MongoDB server');

/*	db.collection('Todos').insertOne({
		text: 'something to do',
		completed: false
	}, (err,result)=>{
		if (err) {
			return console.log('unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/

// insert into TodoApp Database new doc into new collection Users

	db.collection('Users').insertOne({
		name: 'sven gatsos',
		age: '47',
		location: 'Alcala de Henares'
	}, (err,result)=>{
		if (err){
			return console.log('unable to insert doc into Users Coll', err);
		}
		console.log(JSON.stringify(result.ops, undefined,2 ));
	});

	db.close();

});