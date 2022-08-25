module.exports = app => {
    const client = require("../controller/client.controller.js");
    var router = require("express").Router();
    
    router.post("/", client.create);
    
    router.get("/", client.findAll);

    router.put("/:id", client.update);
    
    /*
    router.get("/:id", client.findOne);
    
    router.delete("/:id", client.delete);
    
    router.delete("/", client.deleteAll);
    */
   
    app.use('/api/client', router);
};