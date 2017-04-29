//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
 
	if (err) {
		return console.log('unable to connect to MongoDB server');

	}
	console.log('Hi Sven, connected to MongoDB server');

/*	db.collection('Todos').findOneAndUpdate(
		{ _id: new ObjectID('58f3aae6c2a9e7f6fd399d73')},
		{ $set: {completed: true}},
		{ returnOriginal: false})
			.then( (result)=>{
				console.log(result);
			},(err,result)=>{
				if (err){
					return console.log('unable to insert doc into Users Coll', err);
				}
				console.log(JSON.stringify(result.ops, undefined,2 ));
			});*/

		db.collection('Users').findOneAndUpdate(
		{ _id: new ObjectID('58f29cdd62abf80373a5c557')},
		{ $set: {name: "sven ilias gatsos"}, $inc: {age: 1}},
		{ returnOriginal: false})
			.then( (result)=>{
				console.log(result);
			},(err,result)=>{
				if (err){
					return console.log('unable to insert doc into Users Coll', err);
				}
				console.log(JSON.stringify(result.ops, undefined,2 ));
			});

	db.close();
});