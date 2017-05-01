 var mongoose = require ('mongoose');

 //modelling the DB Users in MongoDB
 var Users	 = mongoose.model( 'Users', {
 	email:{
 		type: String,
 		required: true,
 		minlength: 1,
 		trim: true
 	} 	
 });

 module.exports = {Users};