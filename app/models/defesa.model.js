module.exports = (sequelize, Sequelize, Pessoa) => {
    const Defesa = sequelize.define("defesa", {
        id: {
            type: Sequelize.INTEGER
        },

        id_pessoa: {
            type: Sequelize.INTEGER
        },
        
        cod_oab: {
            type: Sequelize.INTEGER
        }
    });

    return Defesa;
};