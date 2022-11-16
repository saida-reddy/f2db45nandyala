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
exports.ornaments_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Ornaments.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
exports.ornaments_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Ornaments(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
     //{"OrnamentType":"Gold", "OrnamentCost":500, "OrnamentStrength":"High"} 
    document.OrnamentType = req.body.OrnamentType; 
    document.OrnamentCost = req.body.OrnamentCost; 
    document.OrnamentStrength = req.body.OrnamentStrength; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.ornaments_delete =  async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Ornaments.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Costume update form on PUT. 
exports.ornaments_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Ornaments.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.OrnamentType)  
               toUpdate.OrnamentType = req.body.OrnamentType; 
        if(req.body.OrnamentCost) toUpdate.OrnamentCost = req.body.OrnamentCost; 
        if(req.body.OrnamentStrength) toUpdate.OrnamentStrength = req.body.OrnamentStrength; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
// Handle a show one view with id specified by query 
exports.ornaments_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Ornaments.findById( req.query.id) 
        res.render('ornamentsdetail',  
{ title: 'Ornaments Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.ornaments_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('ornamentscreate', { title: 'Ornaments Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a costume. 
// query provides the id 
exports.ornaments_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Ornaments.findById(req.query.id) 
        res.render('ornamentsupdate', { title: 'Ornaments Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.ornaments_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Ornaments.findById(req.query.id) 
        res.render('ornamentsdelete', { title: 'Ornaments Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 