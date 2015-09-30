# Exercise MongoDB Nativer Driver

<pre>git clone https://github.com/keanodejs/06_exercise_mongodb_driver.git</pre>

Then run:

<pre>npm install</pre>

To install all dependencies specified in the package.json files.
In this case it is the [mongodb native driver](https://www.npmjs.com/package/mongodb).

#Exercise: MongoDB 2.0.0 Driver
In the following exercises you should create 4 different applications (4 different javascript files), each containing 1 of the 4 CRUD operations.
You can read about the MongoDB 2.0.0 driver CRUD operations [here](https://github.com/mongodb/node-mongodb-native)

##Find()
Create an app that reads all persons from your “store” database and prints them out in the console.

##Insert()
Insert a person into the database. The person's id should be an automatic generated id.

##Update()
Update the inner object “schoolID” so that the name of the school becomes XXX. You decide yourself which person you want to update.

##Remove()
Remove one of your persons from the store database

##FindOne()
Get the person you inserted earlier in this exercise. You should identify the person from it´s id, and for that you have to use the ObjectID method.


© Kea - clbo 30-09-2015
