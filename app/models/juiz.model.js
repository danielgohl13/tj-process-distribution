module.exports = (sequelize, Sequelize, Pessoa) => {
    const Juiz = sequelize.define("juiz", {
        id: {
            type: Sequelize.INTEGER
        },

        vara_id: {
            type: Sequelize.INTEGER
        },
        
        id_pessoa: {
            type: Sequelize.INTEGER
        }
    });

    return Juiz;
};