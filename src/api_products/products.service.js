const Product = require("./products.model")

const findById = async (id) =>{
    return await Product.findById(id)
}

const findByProductName = async (productName) =>{
    return await Product.find({ name:productName })
}

const deleteById = async (id) =>{
    return await Product.findByIdAndDelete(id)
}


const find = async () =>{
    return await Product.find()
}

const save = async (productData) =>{
    const product = new Product(productData)
    return await product.save()
}

const saveMany = async (product) =>{
    const products = new Product(product)
    return await Product.insertMany(products)
}


module.exports = {findById, findByProductName, find, deleteById, save, saveMany}
