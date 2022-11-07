const mongo = require('mongodb').MongoClient;
const users = [];
var ObjectID = require('mongodb').ObjectID; 
// Join user to chat
const connectionString='mongodb://127.0.0.1/mongochat';



function userJoin(id, username, room) {
  const user = { id, username, room };
  // console.log(dbConn.test);
  users.push(user);
  mongo.connect(connectionString, function(err, db){
    if(err)      {throw err;}
    db.collection('user').insert(user, function(){
      console.log("Data Added !...");

      // Send status object
     
     });
 
 });

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
