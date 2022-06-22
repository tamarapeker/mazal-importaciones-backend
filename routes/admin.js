var express = require('express');
var router = express.Router();
const db = require('../utils/database')
const formidable = require('express-formidable')
const fs = require('fs')

// router.post('/',formidable() ,async function(req,res,next){
//     let path = ""
//     try{
//         path = req.files.image.path
//     }catch(err){
//         console.log("No image sent")
//     }
//     try{
//         fs.readFile(path,'hex',async(err, fileData)=>{
//             if(!err) {
//                 fileData = `\\x${fileData}`;
//             }
//             const queryText = 'INSERT INTO product (product_code, product_name, product_unit, product_measures, product_image, product_observations) VALUES (?,?,?,?,?,?)'
//             const result = await db.execute(queryText, [req.fields.code,req.fields.name,req.fields.unit,req.fields.measures,fileData,req.fields.observations])
//             res.status(200).send(result)
//         })
//     }
//     catch(error){
//         console.log(error)
//         res.status(500).send(error)
//     }
  
// })

//Create new product
router.post('/product', formidable(),async function (req,res,next){

})

//Update product
router.put('/product/:id',formidable(), async function(req,res,next){

})

//Inactive product
router.delete('/product/:id', async function(req,res,next){

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