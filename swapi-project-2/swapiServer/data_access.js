const { MongoClient } = require('mongodb');
// DB Connection URL
var url = "mongodb://localhost:27017";

const client = new MongoClient(url);
// Database and collection variables
const dbName = "swapi";

const collectionNames = ["people","planets","films"]
// const collectionName = "people"


module.exports.call = async function call(operation, parameters, callback) {

  await client.connect();
  // set the database to use
  const db = client.db(dbName);
  // const collection = db.collection(collectionName);

  // set the collection to use
  if (operation.toLowerCase() === "findallpeople"){
    const collection = db.collection(collectionNames[0]);
    const people = await collection.find({}).toArray();
    // console.log(people);
    callback({ people: people });

  }
  if (operation.toLowerCase() === "findperson"){ 
    const collection = db.collection(collectionNames[0]);
    const person = await collection.findOne({ pk: parseInt(parameters.pk)});
    console.log(person);
    callback({person:person});

  }
  if (operation.toLowerCase() === "findallplanets"){
    const collection = db.collection(collectionNames[1]);
    const planets = await collection.find({}).toArray();
    // console.log(people);
    callback({ planets: planets});

  }
  if (operation.toLowerCase() === "findplanet"){
    const collection = db.collection(collectionNames[1]);
    const planet = await collection.findOne({ pk: parseInt(parameters.pk)});
    // console.log(people);
    callback({ planet: planet});

  }
  if (operation.toLowerCase() === "findallfilms"){
    const collection = db.collection(collectionNames[2]);
    const films = await collection.find({}).toArray();
    // console.log(people);
    callback({ films: films});

  }
  if (operation.toLowerCase() === "findfilm"){
    const collection = db.collection(collectionNames[2]);
    const film = await collection.findOne({ pk: parseInt(parameters.pk)});
    // console.log(people);
    callback({ film: film});

  } 

  console.log( 'call complete: ' + operation );
  await client.close();
  return 'call complete';
}

