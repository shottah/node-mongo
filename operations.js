/**
 * Insert document into a given collection in the database.
 * @param {Object} db Reference to the database
 * @param {Object} doc Document to be inserted
 * @param {Object} col Reference to the collection to insert into
 * @return {Promise}
 */
exports.insert = (db, doc, col) => {
  const collection = db.collection(col);
  return collection.insertOne(doc);
};

/**
 * Finds all documents in a given collection in the database.
 * @param {Object} db Reference to the database
 * @param {Object} col Reference to the collection to search
 * @return {Promise}
 */
exports.find = (db, col) => {
  const collection = db.collection(col);
  return collection.find({}).toArray();
};

/**
 * Removes a document from a given collection in the database.
 * @param {Object} db Reference to the database
 * @param {Object} doc Document to be removed
 * @param {Object} col Reference to the collection where the document lives.
 * @return {Promise}
 */
exports.remove = (db, doc, col) => {
  const collection = db.collection(col);
  return collection.deleteOne(doc);
};

/**
 * Updates a document from a given collection in the database.
 * @param {Object} db Reference to the database
 * @param {Object} doc Document to be removed
 * @param {Object} update JSON object to update the document
 * @param {Object} col Reference to the collection where the document lives.
 * @return {Promise}
 */
exports.update = (db, doc, update, col) => {
  const collection = db.collection(col);
  return collection.updateOne(doc, {$set: update}, null);
};
