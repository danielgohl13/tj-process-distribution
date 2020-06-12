module.exports = (sequelize, Sequelize) => {
    const Pessoa = sequelize.define("pessoa", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    nome: {
        type: Sequelize.STRING
    },

    address_id: {
        type: Sequelize.STRING
    },

    tipo: {
        type: Sequelize.STRING
    },

    data_nascimento: {
        type: Sequelize.DATE
    },

    cod: {
        type: Sequelize.STRING
    }
    
});
  
    return Pessoa;
  };