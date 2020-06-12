module.exports = app => {
    const pessoa = require("../controllers/pessoa.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", pessoa.create);
  
  
    app.use('/api/pessoa', router);
  };