var express = require('express');
var router = express.Router();
const db = require('../utils/database')
const formidable = require('express-formidable')
const fs = require('fs')

//get all products with their categories and subcategories
router.get('/', async function(req, res, next) {
    const query = 'SELECT a.product_id, a.product_name, p.category_name, q.subcategory_name FROM product as a JOIN product_category_subcategory as b ON b.product_id = a.product_id JOIN category as p ON b.category_id = p.category_id JOIN subcategory as q ON b.subcategory_id = q.subcategory_id '
    const result = await db.execute(query);
    res.send(result[0])
});

//get product by id
router.get('/:id', async function (req,res,next){
    const query = 'SELECT * from product WHERE product_id = ? '
    const result = await db.execute(query, [req.params.id]);
    res.send(result[0])
})


module.exports = router;