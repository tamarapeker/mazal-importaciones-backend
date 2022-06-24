const db = require('../utils/database')
const fs = require('fs')

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
            const queryText = 'INSERT INTO product (product_code, product_name,product_description, product_measures,product_unit,product_min_cant ,product_cant_bulto,product_image) VALUES (?,?,?,?,?,?,?,?)'
            const result = await db.execute(queryText, [req.fields.code,req.fields.name,req.fields.description,req.fields.measures,req.fields.unit,req.fields.min_cant,req.fields.cant_bulto,fileData])
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
            const queryText = 'UPDATE product SET product_name = ? ,product_description = ?, product_measures = ?,product_unit = ?,product_min_cant = ? ,product_cant_bulto = ?,product_image = ? WHERE product_code = ?'
            const result = await db.execute(queryText, [req.fields.name,req.fields.description,req.fields.measures,req.fields.unit,req.fields.min_cant,req.fields.cant_bulto,fileData,req.fields.code])
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
        const queryText = 'UPDATE product SET product_state = "inactive" WHERE product_id = ?'
        const result = await db.execute(queryText,[id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function addCategory (req) {
    try {
        const queryText = 'INSERT INTO category (category_name) VALUES (?)'
        const result = await db.execute(queryText,[req.body.name]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function updateCategory (req) {
    try {
        const queryText = 'UPDATE category SET category_name = ? WHERE category_id = ?'
        const result = await db.execute(queryText,[req.body.name, req.body.id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function inactiveCategory (id) {
    try {
        const queryText = 'UPDATE category SET category_state = "inactive" WHERE category_id = ?'
        const result = await db.execute(queryText,[id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function addSubcategory (req) {
    try {
        const queryText = 'INSERT INTO subcategory (subcategory_name,category_id) VALUES (?,?)'
        const result = await db.execute(queryText,[req.body.name,req.body.category_id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function updateSubcategory (req) {
    try {
        const queryText = 'UPDATE subcategory SET subcategory_name = ?, category_id = ? WHERE subcategory_id = ?'
        const result = await db.execute(queryText,[req.body.name,req.body.category_id ,req.body.id]);
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function inactiveSubcategory (id) {
    try {
        const queryText = 'UPDATE subcategory SET subcategory_state = "inactive" WHERE subcategory_id = ?'
        const result = await db.execute(queryText,[id]);
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