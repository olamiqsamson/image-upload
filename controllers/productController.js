const products = require('../models/product')

const create = async (req,res) =>{
    const product = await products.create(req.body)
    res.status(201).json({product})
}
const getProducts = async (req,res) =>{
    const product = await products.find()
    res.status(201).json({product})
}

module.exports = {create, getProducts}