var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var ornaments_controller = require('../controllers/ornaments'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/ornaments', ornaments_controller.ornaments_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/ornaments/:id', ornaments_controller.ornaments_delete); 
 
// PUT request to update Costume. 
router.put('/ornaments/:id', ornaments_controller.ornaments_update_put); 
 
// GET request for one Costume. 
router.get('/ornaments/:id', ornaments_controller.ornaments_detail); 
 
// GET request for list of all Costume items. 
router.get('/ornaments', ornaments_controller.ornaments_list); 
 
module.exports = router; 