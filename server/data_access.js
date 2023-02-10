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
//   if (operation.toLowerCase() === "getallemployees"){
//     const collection = db.collection(collectionNames[0]);
//     const employees = await collection.find().toArray();
//     callback({ employees:employees });

//   }
//   else if (operation.toLowerCase() === "getemployee"){ 
//     const collection = db.collection(collectionNames[0]);
//     console.log(parameters)
//     const employee = await collection.findOne({_id: parameters.id});
//     callback({employee:employee});

//   console.log( 'call complete: ' + operation );
//   await client.close();
//   return 'call complete';
//   }
// }
  const collection = db.collection(collectionNames[0]);

  switch (operation.toLowerCase()) {
    case 'getallemployees':
        const employees = await collection.find({}).toArray();
        callback({ employees: employees });
        break;

    case 'getemployee':
        const employee = await collection.findOne({_id: parameters.id});
        callback({ employee:employee });
        break;

    case'getreports':
      const reports = await collection.find({mid: parameters.mid}).toArray()
      callback({ reports: reports });
      break;

    default:
        break;
  }
  console.log( 'call complete: ' + operation );
  client.close();
  return 'call complete';
}

