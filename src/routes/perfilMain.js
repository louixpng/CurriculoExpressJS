const express = require('express');
const router = express.Router();
const { perfil } = require('../models');

router.use(express.json());

router.get('/', async(req, res) => {
    const perfilMain = await perfil.findAll();
    res.json(perfilMain);
})

router.post('/', async(req, res)=> {
    const { nome, idade, descricao } = req.body;
    await perfil.create({nome, idade, descricao});
    res.send('Informações de perfil adicionadas com sucesso!');
})

module.exports = router;