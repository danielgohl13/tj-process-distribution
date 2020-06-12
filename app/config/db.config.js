module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Herdas13",
    DB: "localdatabase",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };