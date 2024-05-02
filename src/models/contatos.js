const contatos = (sequelize, DataTypes) => {
    const Contatos = sequelize.define('Contatos', {
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

    return Contatos;
}

module.exports = contatos;