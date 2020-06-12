module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("processo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    numprocesso: {
        type: Sequelize.INTEGER
    },

    juiz_id: {
        type: Sequelize.INTEGER
    },

    assunto: {
        type: Sequelize.STRING
    },

    partes_id: {
        type: Sequelize.INTEGER
    },

    orgao_id: {
        type: Sequelize.STRING
    },

    peticao: {
        type: Sequelize.STRING
    },

    sorteado: {
        type: Sequelize.BOOLEAN
    }
    
});
  
    return Processo;
  };