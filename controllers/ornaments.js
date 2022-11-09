var Ornaments = require('../models/ornaments'); 
 
// List of all Costumes 
exports.ornaments_list = async function(req, res) { 
    try{ 
        theOrnaments = await Ornaments.find(); 
        res.send(theOrnaments); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific Costume. 
exports.ornaments_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ornaments detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.ornaments_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ornaments create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.ornaments_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ornaments delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.ornaments_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ornaments update PUT' + req.params.id); 
}; 

 //VIEWS 
// Handle a show all view 
exports.ornaments_view_all_Page = async function(req, res) { 
    try{ 
       theOrnaments  = await Ornaments.find(); 
        res.render('ornaments', { title: 'Ornaments Search Results', results: theOrnaments }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 