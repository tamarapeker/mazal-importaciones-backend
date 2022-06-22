var express = require('express');
var router = express.Router();
const db = require('../utils/database')
const formidable = require('express-formidable')
const fs = require('fs')

//get all categories
router.get('/', async function(req, res, next) {
    try{
        const query = 'SELECT category_id, category_name FROM category'
        const result = await db.execute(query);
        res.status(201).send(result[0])
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
});

//get all subcategories with all categories
router.get('/subcategory', async function(req, res, next) {
    try{
        const query = 'SELECT a.subcategory_id, a.subcategory_name, b.category_name FROM subcategory as a JOIN category as b ON a.category_id = b.category_id'
        const result = await db.execute(query)
        res.status(201).send(result[0])
    }
    catch(error){
        res.status(500).send(error)
    }
});

//get category by id
router.get('/:id', async function (req,res,next){
    try{
        const id = req.params.id
        const query = 'SELECT category_id, category_name FROM category WHERE category_id = ?'
        const result = await db.execute(query, [id]);
        res.status(201).send(result[0])
    }
    catch(error){
        res.status(500).send(error)
    }
})



//get subcategories for each category
router.get('/subcategory/:category_id', async function(req, res, next) {
    try{
        const query = 'SELECT a.subcategory_id, a.subcategory_name, b.category_name FROM subcategory as a JOIN category as b ON a.category_id = b.category_id WHERE a.category_id = ?'
        const result = await db.execute(query, [req.params.category_id])
        res.status(201).send(result[0])
    }
    catch(error){
        res.status(500).send(error)
    }
});

//get subcategory by id
router.get('/subcategory/:id', async function (req,res,next){
    
})

module.exports = router;