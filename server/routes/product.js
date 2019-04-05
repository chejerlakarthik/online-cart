const Product = require('../models/product')

module.exports = (router) => {
    router.get('/products', async (req, res, next) => {
        const products = await Product.find({})
        res.json(products)
    })
    
    router.get('/product/:id', async (req, res, next) => {
        const product = await Product.find({_id: req.params.id})
        res.json(product)
    })
    
    router.delete('/product/:id', async (req, res, next) => {
        const product = await Product.remove({_id: req.params.id})
        res.json(product)
    })
    
    router.post('/product', async (req, res, next) => {
        try{
            const product = new Product({
                name : req.body.name,
                price : req.body.price,
                brand : req.body.brand
            })
            const savedProduct = await product.save()
            res.json(savedProduct)
        }
        catch(e){
            res.status(500).json({
                message : 'Invalid product',
                stacktrace : e
            })
        }
    })
    
    router.put('/product/:id', async (req, res, next) => {
        const productId = req.params.id
        try{
            const product = await Product.findOne({_id : productId})
            if(product && req.body){
                product.name = req.body.name
                product.brand = req.body.brand
                product.price = req.body.price
                const savedProduct = await product.save()
                res.json(savedProduct)
            }
            else{
                res.status(404).json({
                    message : 'Product not found'
                })
            }
        }
        catch(e){
            res.status(500).json({
                message : `Update failed for product ${productId}`,
                stacktrace : e
            })
        }
    })    
}