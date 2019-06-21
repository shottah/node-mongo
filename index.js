const mongo = require('mongodb');
const dbops = require('./operations');

const url = 'mongodb://localhost:27017';
const name = 'beidev';

mongo.connect(url, {useNewUrlParser: true}).then((client) => {
  console.log('Connected to server.');

  const db = client.db(name);

  const col = db.collection('dishes');
  const collection = col.collectionName;

  const doc = {
    'name': 'Pepperoni Pizza',
    'description': 'Much better than the soup.',
  };

  dbops.insert(db, doc, collection).then((res) => {
    console.log('Insert documents:' + res.ops);
    return dbops.find(db, collection);
  }).then((docs) => {
    console.log('Found documents:');
    console.log(docs);
    return dbops.update(db, doc,
        {
          'description': 'Much greater than the soup',
        }, collection);
  }).then((res) => {
    console.log('Updated document:');
    console.log(res.result);
    return dbops.find(db, collection);
  }).then((docs) => {
    console.log('Found documents:');
    console.log(docs);
    return db.dropCollection(collection);
  }).then((res) => {
    console.log('Dropped collection:' + collection);
  });
}).catch((err) => console.log(err));

// collection.insertOne({
//     "name": "Pepperoni Pizza",
//     "description": "Much better than the soup."
// }, (err, res) => {
//     assert.equal(err, null);

//     console.log("INSERT");
//     console.log(res.ops);

//     collection.find({}).toArray((err, docs) => {
//         assert.equal(err, null);

//         console.log("FOUND");
//         console.log(docs);

//         db.dropCollection('dishes', (err, res) => {
//             assert.equal(err, null);
//             client.close();
//         });
//     });
// });
