const db = require("../models");
const Tutorial = db.processos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  
  if (!req.body.numprocesso) {
    res.status(400).send({
      message: "Conteudo não pode estar vázio"
    });
    return;
  }


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
