const db = require('../utils/database')

async function getCategories () {
    try{
        const query = 'SELECT category_id, category_name FROM category'
        const result = await db.execute(query);
        return result[0]
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function getSubcategories () {
    try{
        const query = 'SELECT  a.subcategory_id, a.subcategory_name,b.category_id ,b.category_name FROM subcategory as a JOIN category as b ON a.category_id = b.category_id'
        const result = await db.execute(query);
        return result[0]
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function getCategoryById (id) {
    try{
        const query = 'SELECT category_id, category_name FROM category WHERE category_id = ?'
        const result = await db.execute(query,[id]);
        return result[0]
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function getSubcategoriesForCategory (idCateogry) {
    try{
        const query = 'SELECT a.subcategory_id, a.subcategory_name,b.category_id ,b.category_name FROM subcategory as a JOIN category as b ON a.category_id = b.category_id WHERE a.category_id = ?'
        const result = await db.execute(query, [idCateogry]);
        return result[0]
    }
    catch(error){
        console.log(error)
        return error
    }
}

async function getSubcategoryById (idSubcat) {
    try{
        const query = 'SELECT  subcategory_id, subcategory_name FROM subcategory WHERE subcategory_id = ?'
        const result = await db.execute(query, [idSubcat]);
        return result[0]
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