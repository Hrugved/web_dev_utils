//      connecting to Mongo client from powershell(windows)
//      run mongod.exe(look where mongodb is installed on system) and provide database path(where data is stored) as a arg to --dbpath
//      /Users/vijay/mongodb/bin/mongod.exe --dbpath=J:\drive\WORK\courses\ON\nodejs\mongodb-data

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true, useUnifiedTopology: true }, (err,client) => {
    if(err) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connected Successfully!')

    const db = client.db('task-manager')
    
    // ...
    
})
