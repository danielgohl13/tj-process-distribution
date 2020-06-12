module.exports = (sequelize, Sequelize, Pessoa) => {
    const PessoaJur = sequelize.define("pessoajur", {
        id_pessoa: {
            type: Sequelize.INTEGER
        },

        nome_fantasia: {
            type: Sequelize.STRING
        },
        
        inscricao_estadual: {
            type: Sequelize.STRING
        }
    });

    return PessoaJur;
};