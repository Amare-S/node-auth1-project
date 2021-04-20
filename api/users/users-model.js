const dbConfig = require("../../data/db-config");

module.exports = {
  find,findById,findBy,add}

  /**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
function find() {
return db('users');
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
function findBy(filter) {

}

/**
  resolves to the user { user_id, username } with the given user_id
 */
function findById(user_id) {
return db('users').where({ user_id }).first();
}

/**
  resolves to the newly inserted user { user_id, username }
 */
function add(user) {
db('users').insert(user)
.then(ids => {
  return findById(ids[0]);
});
}

// Don't forget to add these to the `exports` object so they can be required in other modules
