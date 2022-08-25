const db = require("../model");
const State = db.state;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    console.log("VALUE: " + req.body.type);
    if (!req.body.type) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    const state = {
        type: req.body.type,
    };
    
    State.create(state)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the state."
            });
        });
};


exports.findAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

    State.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error at state retrieval."
            });
        });
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
