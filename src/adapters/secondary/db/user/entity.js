const Sequelize = require('sequelize');

const db = require('../index');

const User = db.sequelize.define('user', {
    phone: Sequelize.STRING,
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    country: Sequelize.STRING,
    bio: Sequelize.STRING,
});

module.exports = User;