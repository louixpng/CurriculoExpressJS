const contato = (sequelize, DataTypes) => {
    const Contato = sequelize.define('Contato', {
        telefone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        linkedin: {
            type: DataTypes.STRING
        },
        github: {
            type: DataTypes.STRING
        },
        behance: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'contatos'
    })

    return Contato;
}

module.exports = contato;