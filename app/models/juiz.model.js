module.exports = (sequelize, Sequelize) => {
    const Juiz = sequelize.define("juiz", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
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