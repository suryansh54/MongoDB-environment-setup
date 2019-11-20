const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = '<MONGO_DB_CONNECTION_URL>';

// Database Name
const dbName = 'test';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected correctly to server");
    const db = client.db(dbName);
    client.close();
});