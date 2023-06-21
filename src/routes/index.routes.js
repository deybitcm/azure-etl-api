import {Router} from 'express'
import {data} from '../sample.js'

const router = Router()

router.get('/', (req,res) => {
  res.json(data)
})

router.post('/', (req,res) => {
  const newDato = req.body
  res.json({
    log: "Creando registro",
    resgistro: newDato
  })
})

router.put('/', (req,res) => {
  res.json({log: "Editando registro"})
})

export default router;