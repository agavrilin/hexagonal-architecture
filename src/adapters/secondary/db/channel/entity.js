const Sequelize = require('sequelize');

const db = require('../index');

const Channel = db.sequelize.define('channel', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
});

module.exports = Channel;