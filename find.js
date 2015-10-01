var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/clboTest';

MongoClient.connect(url, function (err, db) {
	
	var collection = db.collection('persons');

	collection.find().toArray(function (err, result) {
		console.log(result);
		db.close();
	});
});