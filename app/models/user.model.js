module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        login: {
            type: Sequelize.STRING
        },
        
        senha: {
            type: Sequelize.STRING
        },

        permissao: {
            type: Sequelize.STRING
        }
    });

    return User;
};