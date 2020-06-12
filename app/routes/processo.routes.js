module.exports = app => {
    const processo = require("../controllers/processo.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", processo.create);
  
    router.get("/", processo.getAll);
  
    router.get("/sorted", processo.getAllSorted);
    
    router.get("/:id", processo.getOne);
  
    router.put("/:id", processo.update);

    router.delete("/:id", processo.delete);
  
    router.delete("/", processo.deleteAll);
  
    app.use('/api/processos', router);
  };