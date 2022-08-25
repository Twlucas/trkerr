module.exports = app => {
    const state = require("../controller/state.controller.js");
    var router = require("express").Router();

    
    router.post("/", state.create);
    
    router.get("/", state.findAll);
    
    app.use('/api/state', router);
};