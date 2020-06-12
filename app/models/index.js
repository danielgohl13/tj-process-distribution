const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
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

db.processos = require("./processo.model.js")(sequelize, Sequelize);
db.pessoas = require("./pessoa.model.js")(sequelize, Sequelize);
db.juizes = require("./juiz.model.js")(sequelize, Sequelize);
db.orgaos = require("./orgao.model.js")(sequelize, Sequelize);
db.partes = require("./partes.model.js")(sequelize, Sequelize);
db.pessoafis = require("./pessoafis.model.js")(sequelize, Sequelize);
db.pessoajur = require("./pessoajur.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.vara = require("./vara.model.js")(sequelize, Sequelize);
db.defensores = require("./defesa.model.js")(sequelize, Sequelize);
db.enderecos = require("./endereco.model.js")(sequelize, Sequelize);

module.exports = db;
