var express = require('express');
var router = express.Router();
const db = require('../utils/database')
const formidable = require('express-formidable')
const fs = require('fs')

//get all products with their categories and subcategories
router.get('/', async function(req, res, next) {
    try{
        const query = 'SELECT a.product_id,a.product_code, a.product_name,a.product_description,a.product_measures,a.product_unit,a.product_min_cant,a.product_cant_bulto,a.product_image ,a.product_observations,p.category_name,s.subcategory_name FROM product as a JOIN product_category_subcategory as b ON b.product_id = a.product_id JOIN category as p ON b.category_id = p.category_id JOIN subcategory as s ON b.subcategory_id = s.subcategory_id'
        const result = await db.execute(query);
        result[0].map(product =>{
            if(product.product_measures.length > 0){
                product.product_measures = product.product_measures.split(",")
            }
        })
        res.status(200).send(result[0])
    } 
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
});

router.get('/subcategory/:subcat_id', async function(req, res, next) {
    try{
        const query = 'SELECT a.product_id,a.product_code, a.product_name,a.product_description,a.product_measures,a.product_unit,a.product_min_cant,a.product_cant_bulto,a.product_image ,a.product_observations,p.category_name,s.subcategory_name FROM product as a JOIN product_category_subcategory as b ON b.product_id = a.product_id JOIN category as p ON b.category_id = p.category_id JOIN subcategory as s ON b.subcategory_id = s.subcategory_id WHERE b.subcategory_id = ?'
        const result = await db.execute(query,[req.params.subcat_id]);
        result[0].map(product =>{
            if(product.product_measures.length > 0){
                product.product_measures = product.product_measures.split(",")
            }
        })
        res.status(200).send(result[0])
    } 
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
});

//get product by id
router.get('/:id', async function (req,res,next){
    const query = 'SELECT * from product WHERE product_id = ? '
    const result = await db.execute(query, [req.params.id]);
    const measures = result[0][0].product_measures
    console.log(measures.split(","))
    res.send(result[0])
})



module.exports = router;