module.exports = (sequelize, Sequelize, Endereco) => {
    const Orgao = sequelize.define("orgao", {
        id: {
            type: Sequelize.INTEGER
        },

        address_id: {
            type: Sequelize.INTEGER
        }
    });

    return Orgao;
};