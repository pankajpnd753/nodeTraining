const productsService = require("./products.service")

const findById = async (req, res) => {
    const product = await productsService.findById(req.params.productId)
    res.json({status: 'success', data: product})
}

const findByProductName = async (req, res) => {
    const product = await productsService.findByProductName(req.params.productName)
    res.json({status: 'success', data: product})
}

const deleteById = async (req, res) => {
    const product = await productsService.deleteById(req.params.productId)
    res.json({status: 'success', data: product})
}

const find = async (req, res) =>{
    const products = await productsService.find()
    res.json({status: 'success', data: products})
}

const save = async (req, res) => {
    console.log(req.body)
    const product = req.body
    const updatedProduct = await productsService.save(product)
    res.json({status: 'success', data: { product : updatedProduct }})
}

module.exports = {findById, findByProductName, deleteById, find, save}
