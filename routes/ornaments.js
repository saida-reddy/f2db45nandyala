var express = require('express');
const ornaments_controller= require('../controllers/ornaments'); 
var router = express.Router();

/* GET home page. */
router.get('/', ornaments_controller.ornaments_view_all_Page ); 

module.exports = router;
