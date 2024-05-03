const express = require('express');
const router = express.Router();
const { hardSkill } = require('../models');

router.use(express.json());

router.get('/', async(req, res) => {
    const hardSkills = await hardSkill.findAll();
    res.json(hardSkills);
})

router.post('/', async(req, res)=> {
    const { ferramenta, nivel } = req.body;
    await hardSkill.create({ferramenta, nivel});
    res.send('Hard Skill adicionada com sucesso!');
})

module.exports = router;