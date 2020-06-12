const db = require("../models");
const Pessoa = db.pessoas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {


  const pessoa = {
    nome: req.body.nome,
    address_id: req.body.address_id,
    tipo: req.body.tipo,
    data_nascimento: req.body.data_nascimento,
    cod: req.body.cod
  };


  Pessoas.create(processo)
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

