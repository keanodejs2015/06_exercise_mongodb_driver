var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/clboTest';

MongoClient.connect(url, function (err, db) {
	
	var collection = db.collection('persons');

	collection.remove({'_id' : 8}, function (err, result) {
		console.log(result.result);
		db.close();
	});
});