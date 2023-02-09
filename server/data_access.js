const { MongoClient } = require ('mongodb');
// DB Connection URL
var url = "mongodb://localhost:27017";

const client = new MongoClient(url);
// Database and collection variables
const dbName = "employeeDirectory";

const collectionNames = ["employees"]



module.exports.call = async function call(operation, parameters, callback) {

  await client.connect();
  // set the database to use
  const db = client.db(dbName);
  

  // set the collection to use
  if (operation.toLowerCase() === "getallemployees"){
    const collection = db.collection(collectionNames[0]);
    const employees = await collection.find().toArray();
    callback({ employees:employees });

  }
  if (operation.toLowerCase() === "getemployee"){ 
    const collection = db.collection(collectionNames[0]);
    console.log(parameters)
    const employee = await collection.findOne({_id: parameters.id});
    callback({employee:employee});

  console.log( 'call complete: ' + operation );
  await client.close();
  return 'call complete';
}}
