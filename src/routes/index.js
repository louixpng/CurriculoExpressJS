const express = require('express');
const router = express.Router();

const contatosRouter = require('./contatos');
const expProfissionalRouter = require('./expProfissionais');
const formacaoRouter = require('./formacoes');
const hardSkillsRouter = require('./hardSkills');
const perfilRouter = require('./perfilMain');

router.get('/', (req, res) => {
    res.send("Bem vindo ao meu currículo! :)");
}); 

router.use('/contatos', contatosRouter);
router.use('/expProfissionais', expProfissionalRouter);
router.use('/formacoes', formacaoRouter);
router.use('/hardSkills', hardSkillsRouter);
router.use('/perfilMain', perfilRouter);


module.exports = router;