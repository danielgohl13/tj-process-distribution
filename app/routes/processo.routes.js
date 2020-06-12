module.exports = app => {
    const processos = require("../controllers/processo.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", processo.create);
  
    router.get("/", processo.getAll);
  
    router.get("/published", processo.getAllSorted);
    
    router.get("/:id", processo.getOne);
  
    router.put("/:id", processo.update);

    router.delete("/:id", processo.delete);
  
    router.delete("/", processo.deleteAll);
  
    app.use('/api/processos', router);
  };