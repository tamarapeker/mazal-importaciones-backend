var express = require('express');
var router = express.Router();
const db = require('../utils/database')
const formidable = require('express-formidable')
const fs = require('fs')

//get all categories
router.get('/', async function(req, res, next) {
    
});

//get category by id
router.get('/:id', async function (req,res,next){
    
})

//get all subcategories with their categories
router.get('/subcategory', async function(req, res, next) {
    
});

//get subcategory by id
router.get('/subcategory/:id', async function (req,res,next){
    
})

module.exports = router;