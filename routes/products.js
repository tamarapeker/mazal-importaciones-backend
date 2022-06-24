var express = require('express');
var router = express.Router();
const productControllers = require('../controllers/productControllers')

//get all products with their categories and subcategories
router.get('/', async function(req, res, next) {
    try{
        const result = await productControllers.getProducts();
        res.status(201).send(result)
    } 
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
});

//get all products for each subcategory
router.get('/subcategory/:subcat_id', async function(req, res, next) {
    try{
        const id = req.params.subcat_id
        const result = await productControllers.getProductsForSubcategory(id);
        res.status(201).send(result)
    } 
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
});

//get product by id
router.get('/:id', async function (req,res,next){
    try{
        const id = req.params.id
        const result = await productControllers.getProductById(id);
        res.status(201).send(result)
    } 
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})


module.exports = router;