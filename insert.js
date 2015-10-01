var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/clboTest';

var objToInsert = {
    name: 'Tammy',
    age: 18,
    schoolID: { name: 'ITU', address: 'Amager', country: 'Denmark' }
};

MongoClient.connect(url, function (err, db) {
	
	var collection = db.collection('persons');

	collection.insert(objToInsert, function (err, result) {
		console.log(result.result);
		db.close();
	});
});