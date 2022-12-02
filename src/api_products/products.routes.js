const express = require('express')
const { findById, findByProductName, deleteById, find, save } = require('./products.controller')
const router = express.Router()

router.get('/', find)
router.get('/:productId', findById)
router.get('/findByName/:productName', findByProductName)
router.delete('/:productId', deleteById)
router.post('/', save)

module.exports = router