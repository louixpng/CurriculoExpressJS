const expProfissional = (sequelize, DataTypes) => {
    const ExpProfissional = sequelize.define('ExpProfissional', {
        empresa: {
            type: DataTypes.STRING
        },
        cargo: {
            type: DataTypes.STRING
        },
        descricao :{
            type: DataTypes.STRING
        },
        anoInicio: {
            type: DataTypes.INTEGER
        },
        anoConclusao: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'expProfissional'
    })

    return ExpProfissional;
}

module.exports = expProfissional;