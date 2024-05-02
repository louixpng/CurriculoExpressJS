const formacao = (sequelize, DataTypes) => {
    const Formacao = sequelize.define('Formacao', {
        instituicao: {
            type: DataTypes.STRING
        },
        titulo: {
            type: DataTypes.STRING
        },
        anoInicio: {
            type: DataTypes.INTEGER
        },
        anoConclusao: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'formacao'
    })

    return Formacao;
}

module.exports = formacao;