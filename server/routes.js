var express = require('express')
var router = express.Router()

module.exports = () => {
    router.get('/cart', function(req, res, next){
        res.json([{
            item : 'Jeans',
            quantity : 2
        },{
            item : 'Shirt',
            quantity : 4
        },{
            item : 'Pants',
            quantity : 3
        }])
    })
    return router
}