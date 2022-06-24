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
    try {
        const result = await adminControllers.addCategory(req)
        res.status(201).send({message: "Se ha creado la categoría con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Update category
router.put('/category', async function(req,res,next){
    try {
        const result = await adminControllers.updateCategory(req)
        res.status(201).send({message: "Se ha modificado la categoría con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Inactive category
router.delete('/category/:id', async function(req,res,next){
    try {
        const id = req.params.id
        const result = await adminControllers.inactiveCategory(id)
        res.status(201).send({message: "Se ha eliminado la categoría con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Create subcategory
router.post('/subcategory', async function(req,res,next){
    try {
        const result = await adminControllers.addSubcategory(req)
        res.status(201).send({message: "Se ha creado la subcategoría con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Update subcategory
router.put('/subcategory', async function(req,res,next){
    try {
        const result = await adminControllers.updateSubcategory(req)
        res.status(201).send({message: "Se ha modificado la subcategoría con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//Inactive subcategory
router.delete('/subcategory/:id', async function(req,res,next){
    try {
        const id = req.params.id
        const result = await adminControllers.inactiveSubcategory(id)
        res.status(201).send({message: "Se ha eliminado la subcategoría con éxito"})
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})


module.exports = router;