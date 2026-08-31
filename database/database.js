const Sequelize = require('sequelize');

const connection = new Sequelize('pureanswers','root','mmmm',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;


