var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/clboTest';

MongoClient.connect(url, function (err, db) {
	
	var collection = db.collection('persons');
	var id = ObjectId('560c3c41f42156f340d24aad');

	collection.findOne({'_id' : id}, function (err, result) {
		console.log(result);
		db.close();
	});
});