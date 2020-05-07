const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
  res.json({
    conteudo: 'Parabéns, gostei bastante!',
    autor: 'Ramón Souza'
  })
}) 


module.exports = router