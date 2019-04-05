const express = require('express');
const productRoutes = require('./product')
const userRoutes = require('./user')

module.exports = (passport) => {
    const router = express.Router();
    
    productRoutes(router)
    userRoutes(router, passport)

    return router
}