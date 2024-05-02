const hardSkills = (sequelize, DataTypes) => {
    const HardSkills = sequelize.define('HardSkills', {
        ferramenta: {
            type: DataTypes.STRING
        },
        nivel: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'hardSkills'
    })

    return HardSkills;
}

module.exports = hardSkills;