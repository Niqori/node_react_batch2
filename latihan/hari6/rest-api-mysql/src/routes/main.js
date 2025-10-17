const express = require('express')
const { createMovie, readMovieById, updateMovie,deleteMovie } = require('../controllers/movieController')
const { readMovie } = require('../controllers/movieController') 

const router = express.Router()


router.post('/movie', createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id',readMovieById)
router.put('/movie/:id',updateMovie)
router.delete('/movie/:id',deleteMovie)

module.exports = router