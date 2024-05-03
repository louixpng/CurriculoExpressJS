const express = require('express');
const router = express.Router();
const { contato } = require('../models');

router.use(express.json());

router.get('/', async(req, res) => {
    const contatos = await contato.findAll();
    res.json(contatos);
})

router.post('/', async(req, res) => {
    const { telefone, email, linkedin, github, behance } = req.body;
    await contato.create({ telefone, email, linkedin, github, behance});
    res.send('Informações de contato adicionadas com sucesso!');
})

module.exports = router;