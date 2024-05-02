const express = require('express');
const router = express.Router();

const contatosRouter = require('./contatos');
const expProfissionalRouter = require('./expProfissional');
const formacaoRouter = require('./formacao');
const hardSkillsRouter = require('./hardSkills');
const perfilRouter = require('./perfil');

router.get('/', (req, res) => {
    res.send("Bem vindo ao meu currículo! :)");
}); 

router.use('/contatos', contatosRouter);
router.use('/expProfissional', expProfissionalRouter);
router.use('/formacao', formacaoRouter);
router.use('/hardSkills', hardSkillsRouter);
router.use('/perfil', perfilRouter);


module.exports = router;