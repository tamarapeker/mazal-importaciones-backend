//const db = require('../utils/database')
const { Pool } = require('pg');
const pool = new Pool()

async function getProducts () {
    try{
        const text = "SELECT a.product_id,a.product_code, a.product_name,a.product_description,a.product_measures,a.product_unit,a.product_min_cant,a.product_cant_bulto,a.product_image,p.category_name,s.subcategory_name FROM product as a JOIN product_category_subcategory as b ON b.product_id = a.product_id JOIN category as p ON b.category_id = p.category_id JOIN subcategory as s ON b.subcategory_id = s.subcategory_id WHERE a.product_state = 'active'"
        const result = await pool.query(text)
        return result.rows
    } 
    catch(error){
        console.log(error)
        return error
    }
}

async function getProductsForSubcategory (id) {
    try{
        const text = "SELECT a.product_id,a.product_code, a.product_name,a.product_description,a.product_measures,a.product_unit,a.product_min_cant,a.product_cant_bulto,a.product_image,p.category_name,s.subcategory_name FROM product as a JOIN product_category_subcategory as b ON b.product_id = a.product_id JOIN category as p ON b.category_id = p.category_id JOIN subcategory as s ON b.subcategory_id = s.subcategory_id WHERE b.subcategory_id = $1 AND a.product_state = 'active'"
        const result = await pool.query(text,[id])
        return result.rows
    } 
    catch(error){
        console.log(error)
        return error
    }
}

async function getProductById (id) {
    try{
        const text = "SELECT * from product WHERE product_id = $1 AND product_state = 'active'"
        const result = await pool.query(text,[id])
        return result.rows
    } 
    catch(error){
        console.log(error)
        return error
    }
}

module.exports = {
    getProducts: getProducts,
    getProductsForSubcategory: getProductsForSubcategory,
    getProductById: getProductById,
}