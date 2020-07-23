const Sequelize = require('sequelize');

const db = require('../index');

const User = db.sequelize.define('user', {
    phone: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    birthday: Sequelize.DATE,
    bio: Sequelize.STRING,
    imageUrl: Sequelize.STRING,
});

module.exports = User;