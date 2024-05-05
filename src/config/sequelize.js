require("dotenv").config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_CONNECTION_STRING,
    dialect: "postgres",
    port: process.env.DB_PORT
  }
);

module.exports = sequelize;