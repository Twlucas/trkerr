const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
//const { request } = require("express");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.client = require("./client.model.js")(sequelize, Sequelize);
db.issue = require("./issue.model.js")(sequelize, Sequelize);
db.state = require("./state.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

db.client.hasMany(db.issue);
db.issue.belongsTo(db.client);

db.state.hasMany(db.issue);
db.issue.belongsTo(db.state);

db.user.hasMany(db.issue);
db.issue.belongsTo(db.user);

module.exports = db;
