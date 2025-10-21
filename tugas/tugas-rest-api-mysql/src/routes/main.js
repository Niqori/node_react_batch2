const express = require('express')
const router = express.Router()
const { createMhs, readMhs, updateMhs, deleteMhs} = require('../controllers/mhsController')

router.post('/mahasiswa', createMhs)
router.get('/mahasiswa', readMhs)
router.put('/mahasiswa/:id', updateMhs)
router.delete('/mahasiswa/:id', deleteMhs)

module.exports = router