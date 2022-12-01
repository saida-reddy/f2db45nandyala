var express = require('express');
const ornaments_controller= require('../controllers/ornaments'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', ornaments_controller.ornaments_view_all_Page ); 
/* GET detail ornaments page */ 
router.get('/detail', ornaments_controller.ornaments_view_one_Page); 
/* GET create ornaments page */ 
router.get('/create',secured, ornaments_controller.ornaments_create_Page); 
/* GET create update page */ 
router.get('/update',secured, ornaments_controller.ornaments_update_Page); 
/* GET delete costume page */ 
router.get('/delete',secured, ornaments_controller.ornaments_delete_Page); 
module.exports = router;
