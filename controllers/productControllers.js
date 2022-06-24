const db = require('../utils/database')

async function getProducts () {
    try{
        const query = 'SELECT a.product_id,a.product_code, a.product_name,a.product_description,a.product_measures,a.product_unit,a.product_min_cant,a.product_cant_bulto,a.product_image,p.category_name,s.subcategory_name FROM product as a JOIN product_category_subcategory as b ON b.product_id = a.product_id JOIN category as p ON b.category_id = p.category_id JOIN subcategory as s ON b.subcategory_id = s.subcategory_id WHERE a.product_state = "active"'
        const result = await db.execute(query);
        result[0].map(product =>{
            if(product.product_measures.length > 0){
                product.product_measures = product.product_measures.split(",")
            }
        })
        return result[0]
    } 
    catch(error){
        console.log(error)
        return error
    }
}

async function getProductsForSubcategory (id) {
    try{
        const query = 'SELECT a.product_id,a.product_code, a.product_name,a.product_description,a.product_measures,a.product_unit,a.product_min_cant,a.product_cant_bulto,a.product_image,p.category_name,s.subcategory_name FROM product as a JOIN product_category_subcategory as b ON b.product_id = a.product_id JOIN category as p ON b.category_id = p.category_id JOIN subcategory as s ON b.subcategory_id = s.subcategory_id WHERE b.subcategory_id = ? AND a.product_state = "active"'
        const result = await db.execute(query,[id]);
        result[0].map(product =>{
            if(product.product_measures.length > 0){
                product.product_measures = product.product_measures.split(",")
            }
        })
        return result[0]
    } 
    catch(error){
        console.log(error)
        return error
    }
}

async function getProductById (id) {
    try{
        const query = 'SELECT * from product WHERE product_id = ? AND product_state = "active"'
        const result = await db.execute(query,[id]);
        result[0].map(product =>{
            if(product.product_measures.length > 0){
                product.product_measures = product.product_measures.split(",")
            }
        })
        return result[0]
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