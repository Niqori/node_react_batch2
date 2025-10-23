const express = require('express')
const { createMovie, readMovie, readMovieById, updateMovie,deleteMovie } = require('../controllers/movieController')
const { createCategory, readCategory, updateCategory, deleteCategory, readCategoryById } = require('../controllers/categoryController')

const router = express.Router()

router.post('/kategori',createCategory)
router.get('/kategori',readCategory)
router.put('/kategori/:id',updateCategory)
router.delete('/kategori/:id',deleteCategory)
router.get('/kategori/:id',readCategoryById)


router.post('/movie', createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id',readMovieById)
router.put('/movie/:id',updateMovie)
router.delete('/movie/:id',deleteMovie)

module.exports = router