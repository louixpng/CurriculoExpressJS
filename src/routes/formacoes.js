const express = require('express');
const router = express.Router();
const { formacao } = require('../models');

router.use(express.json());

router.get('/', async(req, res) => {
    const formacoes = await formacao.findAll();
    res.json(formacoes);
})

router.post('/', async(req, res)=> {
    const { instituicao, titulo, anoInicio, anoConclusao } = req.body;
    await formacao.create({instituicao, titulo, anoInicio, anoConclusao});
    res.send('Formação adicionada com sucesso!');
})

module.exports = router;