const hardSkill = (sequelize, DataTypes) => {
    const HardSkill = sequelize.define('HardSkill', {
        ferramenta: {
            type: DataTypes.STRING
        },
        nivel: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'hardSkills'
    })

    return HardSkill;
}

module.exports = hardSkill;