import {Router} from 'express'
import {data} from '../sample.js'

const router = Router()

router.get('/', (req,res) => {
  res.json(data)
})

router.post('/', (req,res) => {
  res.json({log: "Creando registro"})
})

router.put('/', (req,res) => {
  res.json({log: "Editando registro"})
})

export default router;