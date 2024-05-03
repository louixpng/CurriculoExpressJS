const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Contato = require('./contato');
const ExpProfissional = require('./expProfissional');
const Formacao = require('./formacao');
const HardSkill = require('./hardSkill');
const Perfil = require('./perfil');

const contato = Contato(sequelize, Sequelize.DataTypes);
const expProfissional = ExpProfissional(sequelize, Sequelize.DataTypes);
const formacao = Formacao(sequelize, Sequelize.DataTypes);
const hardSkill = HardSkill(sequelize, Sequelize.DataTypes);
const perfil = Perfil(sequelize, Sequelize.DataTypes);

const db = {
    contato,
    expProfissional,
    formacao,
    hardSkill,
    perfil,
    sequelize
}

module.exports = db;