module.exports = app => {
    const issue = require("../controller/issue.controller.js");
    var router = require("express").Router();

    
    router.post("/", issue.create);
    
    router.get("/", issue.findAll);

    app.use('/api/issue', router);
};