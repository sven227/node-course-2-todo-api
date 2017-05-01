//const MongoClient = require('mongodb').MongoClient;
const {
	MongoClient,
	ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err) {
		return console.log('unable to connect to MongoDB server');

	}
	console.log('Hi Sven, connected to MongoDB server');

	//delete by ObjectID
	/*	db.collection('Users').findOneAndDelete({_id: new ObjectID("58f378a881c37a037d3e690f")})
			.then( (result)=>{
				console.log(result);
			}); */


	//deleteMany
	db.collection('Users').deleteMany({
			name: "Michael"
		})
		.then((result) => {
			console.log(result);
		});


	db.close();
});