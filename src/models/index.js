const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Contatos = require('./contatos');
const ExpProfissional = require('./expProfissional');
const Formacao = require('./formacao');
const HardSkills = require('./hardSkills');
const Perfil = require('./perfil');

const contatos = Contatos(sequelize, Sequelize.DataTypes);
const expProfissional = ExpProfissional(sequelize, Sequelize.DataTypes);
const formacao = Formacao(sequelize, Sequelize.DataTypes);
const hardSkills = HardSkills(sequelize, Sequelize.DataTypes);
const perfil = Perfil(sequelize, Sequelize.DataTypes);

const db = {
    contatos,
    expProfissional,
    formacao,
    hardSkills,
    perfil,
    sequelize
}

module.exports = db;