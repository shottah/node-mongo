exports.insert = (db, doc, col, callback) => {
  const collection = db.collection(col);

  return collection.insertOne(doc);
};

exports.find = (db, col, callback) => {
  const collection = db.collection(col);
  return collection.find({}).toArray();
};

exports.remove = (db, doc, col, callback) => {
  const collection = db.collection(col);
  return collection.deleteOne(doc);
};

exports.update = (db, doc, update, col, callback) => {
  const collection = db.collection(col);
  return collection.updateOne(doc, {$set: update}, null);
};
