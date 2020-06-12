module.exports = (sequelize, Sequelize, Defesa) => {
    const Partes = sequelize.define("partes", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        id_pessoa: {
            type: Sequelize.INTEGER
        },
        
        defesa_id: {
            type: Sequelize.INTEGER
        },

        id_pessoa_reu: {
            type: Sequelize.INTEGER
        },

        defesa_reu_id: {
            type: Sequelize.INTEGER
        }
    });

    return Partes;
};