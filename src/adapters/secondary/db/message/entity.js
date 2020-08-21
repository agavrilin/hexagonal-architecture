const Sequelize = require('sequelize');

const db = require('../index');

const Message = db.sequelize.define('message', {
    cahnnelId: Sequelize.STRING,
    userId: Sequelize.STRING,
    text: Sequelize.STRING,
});

module.exports = Message;