const cors = require('cors');
//import cors form "cors";
const express = require("express");
const rateLimit = require("express-rate-limit");
const db = require("./model");

/*var corsOptions = {
    //origin: ['http://localhost:8081', 'localhost:8081', 'http://localhost:8080/client', 'http://localhost:8080'] 
    origin: '*',
    optionsSuccessStatus: 200
};*/

/*const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    standardHeaders: true,
    legacyHeaders: false, 
});*/

const app = express();

//app.use(limiter)
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./router/client.routes")(app);
require("./router/issue.routes")(app);
require("./router/state.routes")(app);
require("./router/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3232;

db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});




