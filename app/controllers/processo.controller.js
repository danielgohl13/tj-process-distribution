const db = require("../models");
const Processo = db.processos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const processo = {
    title: req.body.numprocesso,
  };


  Processo.create(processo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao criar processso."
      });
    });
};


exports.getAll = (req, res) => {
  
};


exports.getOne = (req, res) => {
  
};


exports.update = (req, res) => {
  
};


exports.delete = (req, res) => {
  
};


exports.deleteAll = (req, res) => {
  
};


exports.getAllSorted = (req, res) => {
  
};
