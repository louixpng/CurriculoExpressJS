const express = require('express');
const router = express.Router();
const { expProfissional } = require('../models');

router.use(express.json());

router.get('/', async(req, res) => {
    const expProfissionais = await expProfissional.findAll();
    res.json(expProfissionais);
})

router.post('/', async(req, res)=> {
    const { empresa, cargo, descricao, anoInicio, anoConclusao } = req.body;
    await expProfissional.create({empresa, cargo, descricao, anoInicio, anoConclusao});
    res.send('Experiência Profissional adicionada com sucesso!');
})

module.exports = router;