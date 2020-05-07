const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
  res.json({
    titulo: 'meu primeiro post',
    conteudo: 'era uma vez uma publicação',
    autor: 'Jonatan R Dalbosco'
  })
}) 


module.exports = router