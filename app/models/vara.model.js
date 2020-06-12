module.exports = (sequelize, Sequelize, Endereco) => {
    const Vara = sequelize.define("vara", {
        id: {
            type: Sequelize.INTEGER
        },

        address_id: {
            type: Sequelize.INTEGER
        }
    });

    return Vara;
};