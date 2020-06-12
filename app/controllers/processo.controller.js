const db = require("../models");
const Processo = db.processos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {


  const processo = {
    numprocesso: req.body.numprocesso,
    juiz_id: req.body.juiz,
    assunto: req.body.assunto,
    partes_id: req.body.partes,
    orgao_id: req.body.orgao,
    peticao: req.body.peticao,
    sorteado: req.body.sort
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
    const numprocesso = req.query.numprocesso;
    var condition = numprocesso ? { numprocesso: { [Op.iLike]: `%${numprocesso}%` } } : null;
  
    Processo.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "erro ao buscar processos."
        });
      });
  };

exports.getOne = (req, res) => {
    const id = req.params.id;

    Processo.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao buscar processo de id:" + id
        });
      });
};


exports.update = (req, res) => {
    const id = req.params.id;
  
    Processo.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Processo atualizado."
          });
        } else {
          res.send({
            message: `Processo de id=${id} não atualizado, talves o campo esteja vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "erro ao atulizar o processo de id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Processo.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Processo id=${id} foi deletado!`
          });
        } else {
          res.send({
            message: `Não foi possível deletar o processo de id=${id}.Talvez não exista`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possível deletar o processo " + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    Processo.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} processos foram deletados` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algo aconteceu enquanto voce tentava deletar todos os processos."
        });
      });
  };

  exports.getAllSorted = (req, res) => {
    Processo.findAll({ where: { sorteado: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Não foi possível recuperar os processos sorteados."
        });
      });
  };
