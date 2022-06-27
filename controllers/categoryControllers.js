//const db = require('../utils/database')
const { Pool } = require('pg');
const pool = new Pool()

async function getCategories () {
    try{
        const text = "SELECT category_id, category_name FROM category WHERE category_state = 'active'"
        const result = await pool.query(text)
        return result.rows
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function getSubcategories () {
    try{
        const text = "SELECT  a.subcategory_id, a.subcategory_name,b.category_id ,b.category_name FROM subcategory as a JOIN category as b ON a.category_id = b.category_id WHERE subcategory_state='active'"
        const result = await pool.query(text)
        return result.rows
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function getCategoryById (id) {
    try{
        const text = "SELECT category_id, category_name FROM category WHERE category_id = $1 AND category_state = 'active'"
        const result = await pool.query(text,[id])
        return result.rows
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function getSubcategoriesForCategory (idCateogry) {
    try{
        const text = "SELECT a.subcategory_id, a.subcategory_name,b.category_id ,b.category_name FROM subcategory as a JOIN category as b ON a.category_id = b.category_id WHERE b.category_id = $1 AND a.subcategory_state = 'active'"
        const result = await pool.query(text,[idCateogry])
        return result.rows
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function getSubcategoryById (idSubcat) {
    try{
        const text = "SELECT  a.subcategory_id, a.subcategory_name, b.category_id, b.category_name FROM subcategory as a JOIN category as b ON a.category_id = b.category_id WHERE a.subcategory_id = $1 AND subcategory_state = 'active'"
        const result = await pool.query(text,[idSubcat])
        return result.rows
    }
    catch(error){
        console.log(error)
        return error
    }
}

module.exports = {
    getCategories: getCategories,
    getSubcategories: getSubcategories,
    getCategoryById: getCategoryById,
    getSubcategoriesForCategory: getSubcategoriesForCategory,
    getSubcategoryById: getSubcategoryById,
}