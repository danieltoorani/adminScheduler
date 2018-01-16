var UserMeta = require('./User.js'),
    connection = require('../sequelize.js')
//here we define our connection to user table using sequelize
//and make use of attributes defined in User.js
var User = connection.define('users', UserMeta.attributes, UserMeta.options)

// you can define relationships here

module.exports.User = User
