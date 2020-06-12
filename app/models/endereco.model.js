module.exports = (sequelize, Sequelize) => {
    const Endereco = sequelize.define("endereco", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        logradouro: {
            type: Sequelize.STRING
        },
        
        numero: {
            type: Sequelize.INTEGER
        },

        bairro: {
            type: Sequelize.STRING
        },

        cep: {
            type: Sequelize.INTEGER
        },

        cidade: {
            type: Sequelize.STRING
        },
        
        estado: {
            type: Sequelize.STRING
        },

        complemento: {
            type: Sequelize.STRING
        }
    });

    return Endereco;
};