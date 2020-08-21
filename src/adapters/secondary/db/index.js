const Sequelize = require('sequelize');

const config = require('./config');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});

const db = {};

db.sequelize = sequelize;

module.exports = db;
