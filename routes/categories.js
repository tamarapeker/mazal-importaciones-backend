var express = require('express');
var router = express.Router();
const categoryControllers = require('../controllers/categoryControllers')

//get all categories
router.get('/', async function(req, res, next) {
    try{
        const result = await categoryControllers.getCategories()
        res.status(201).send(result)
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
});

//get all subcategories with all categories
router.get('/subcategory', async function(req, res, next) {
    try{
        const result = await categoryControllers.getSubcategories()
        res.status(201).send(result)
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
});

//get category by id
router.get('/:id', async function (req,res,next){
    try{
        const id = req.params.id
        const result = await categoryControllers.getCategoryById(id)
        res.status(201).send(result)
    }
    catch(error){
        res.status(500).send(error)
    }
})

//get subcategories for each category
router.get('/:category_id/subcategory', async function(req, res, next) {
    try{
        const id = req.params.category_id
        const result = await categoryControllers.getSubcategoriesForCategory(id)
        res.status(201).send(result)
    }
    catch(error){
        res.status(500).send(error)
    }
});

//get subcategory by id
router.get('/subcategory/:subcategory_id', async function (req,res,next){
    try{
        const id = req.params.subcategory_id
        const result = await categoryControllers.getSubcategoryById(id)
        res.status(201).send(result)
    }
    catch(error){
        res.status(500).send(error)
    }
    
})

module.exports = router;