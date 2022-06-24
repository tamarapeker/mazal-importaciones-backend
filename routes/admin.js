var express = require('express');
var router = express.Router();
const formidable = require('express-formidable')
const adminControllers = require('../controllers/adminControllers')

//Create new product
router.post('/product', formidable(),async function (req,res,next){
    try {
        const result = await adminControllers.addProduct(req)
        res.status(201).send({message: "Se ha creado el producto con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Update product
router.put('/product',formidable(), async function(req,res,next){
    try {
        const result = await adminControllers.updateProduct(req)
        res.status(201).send({message: "Se ha modificado el producto con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Inactive product
router.delete('/product/:id', async function(req,res,next){
    try {
        const id = req.params.id
        const result = await adminControllers.inactiveProduct(id)
        res.status(201).send({message: "Se ha eliminado el producto con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Create category
router.post('/category', async function(req,res,next){

})

//Update category
router.put('/category/:id', async function(req,res,next){

})

//Inactive category
router.delete('/category/:id', async function(req,res,next){

})

//Create subcategory
router.post('/subcategory', async function(req,res,next){

})

//Update subcategory
router.put('/subcategory/:id', async function(req,res,next){

})

//Inactive subcategory
router.delete('/subcategory/:id', async function(req,res,next){

})


module.exports = router;