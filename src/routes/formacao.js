const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        2019 - 2021
        Técnico em Multimídia para Jogos Digitais
        Escola Técnica Estadual Cícero Dias - NAVE Recife

        _______________________________________

        2022 - 2026
        Bacharelado em Artes Visuais
        Universidade Federal de Pernambuco

        _______________________________________

        2022 - 2024
        Tecnólogo em Sistemas para Internet
        Universidade Católica de Pernambuco
    `)
})

module.exports = router;