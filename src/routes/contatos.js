const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        Telefone: (81) 99482-0824
        Email: luismsm2003@gmail.com
        Linkedin: linkedin.com/in/luismsmelo
        Github: github.com/louixpng
    `)
})

module.exports = router;