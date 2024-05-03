const express = require('express');
const routers = require('./src/routes');
const { sequelize } = require('./src/models');

const app = express();

app.use('/', routers);

sequelize.sync().then(() => {
    console.log('Conectado ao banco de dados com sucesso!')
})//.catch(err => {
   // console.error('Não conectou ao banco de dados :(')
//})

app.listen(3000, () => {
    console.log ("App ExpressJS está online!")
})