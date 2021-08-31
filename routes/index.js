var express = require('express');
var router = express.Router();
const db = require('../utils/database')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', async function(req,res,next){
  const result = await db.execute('SELECT * FROM products');
  res.send(result[0])
})

module.exports = router;
