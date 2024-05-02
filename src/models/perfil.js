const perfil = (sequelize, DataTypes) => {
    const Perfil = sequelize.define('Perfil', {
        nome: {
            type: DataTypes.STRING
        },
        idade: {
            type: DataTypes.INTEGER
        },
        descricao: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'perfil'
    })

    return Perfil;
}

module.exports = perfil;