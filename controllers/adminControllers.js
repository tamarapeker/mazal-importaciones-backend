//const db = require('../utils/database')
const fs = require('fs')
const { Pool } = require('pg');
const pool = new Pool()

async function addProduct(req) {
    let path = ""
    try{
        path = req.files.image.path
    }catch(err){
        console.log("No image sent")
    }
    try{
        fs.readFile(path,'hex',async(err, fileData)=>{
            if(!err) {
                fileData = `\\x${fileData}`;
            }
            const queryText = "INSERT INTO product (product_code, product_name,product_description, product_measures,product_unit,product_min_cant ,product_cant_bulto,product_image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)"
            const result = await pool.query(queryText, [req.fields.code,req.fields.name,req.fields.description,req.fields.measures,req.fields.unit,req.fields.min_cant,req.fields.cant_bulto,fileData])
            return result
        })
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function updateProduct(req) {
    let path = ""
    try{
        path = req.files.image.path
    }catch(err){
        console.log("No image sent")
    }
    try{
        fs.readFile(path,'hex',async(err, fileData)=>{
            if(!err) {
                fileData = `\\x${fileData}`;
            }
            const queryText = "UPDATE product SET product_name = $2 ,product_description = $3, product_measures = $4,product_unit = $5,product_min_cant = $6 ,product_cant_bulto = $7,product_image = $8 WHERE product_code = $1"
            const result = await pool.query(queryText, [req.fields.code,req.fields.name,req.fields.description,req.fields.measures,req.fields.unit,req.fields.min_cant,req.fields.cant_bulto,fileData])
            return result
        })
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function inactiveProduct (id) {
    try {
        const queryText = "UPDATE product SET product_state = 'inactive' WHERE product_id = $1"
        const result = await pool.query(queryText,[id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function addCategory (req) {
    try {
        const queryText = "INSERT INTO category (category_name) VALUES ($1)"
        const result = await pool.query(queryText,[req.body.name]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function updateCategory (req) {
    try {
        const queryText = "UPDATE category SET category_name = $2 WHERE category_id = $1"
        const result = await pool.query(queryText,[req.body.id,req.body.name]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function inactiveCategory (id) {
    try {
        const queryText = "UPDATE category SET category_state = 'inactive' WHERE category_id = $1"
        const result = await pool.query(queryText,[id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function addSubcategory (req) {
    try {
        const queryText = "INSERT INTO subcategory (subcategory_name,category_id) VALUES ($1,$2)"
        const result = await pool.query(queryText,[req.body.name,req.body.category_id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function updateSubcategory (req) {
    try {
        const queryText = "UPDATE subcategory SET subcategory_name = $2, category_id = $3 WHERE subcategory_id = $1"
        const result = await pool.query(queryText,[req.body.id,req.body.name,req.body.category_id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function inactiveSubcategory (id) {
    try {
        const queryText = "UPDATE subcategory SET subcategory_state = 'inactive' WHERE subcategory_id = $1"
        const result = await pool.query(queryText,[id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

module.exports = {
    addProduct: addProduct,
    updateProduct: updateProduct,
    inactiveProduct: inactiveProduct,
    addCategory: addCategory,
    updateCategory: updateCategory,
    inactiveCategory: inactiveCategory,
    addSubcategory: addSubcategory,
    updateSubcategory: updateSubcategory,
    inactiveSubcategory: inactiveSubcategory,
}