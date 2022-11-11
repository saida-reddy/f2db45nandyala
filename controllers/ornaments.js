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
exports.ornaments_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Ornaments delete DELETE ' + req.params.id); 
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