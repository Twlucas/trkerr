const db = require("../model");
const Issue = db.issue;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    const issue = {
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration,
        clientId: req.body.clientId,
        stateId: req.body.stateId,
        userId: req.body.userId
    };

    
    Issue.create(issue)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Issue."
            });
        });
};



exports.findAll = (req, res) => {
    const title = req.query.title;
    const client = req.query.clientId;
    const state = req.query.stateId;
    const desc = req.query.desc;
    const duration = req.query.duration;
    const user = req.query.user;

    var conditionTitle = title ? { title: { [Op.like]: `%${title}%` } } : null;
    var conditionClient = client ? { clientId: { [Op.like]: `%${client}%` } } : null;
    var conditionState = state ? { stateId: { [Op.like]: `%${state}%` } } : null;
    var conditionDesc = desc ? { desc: { [Op.like]: `%${desc}%` } } : null;
    var conditionDur = duration ? { duration: { [Op.like]: `%${duration}%` } } : null;
    var conditionUser = user ? { userId: { [Op.like]: `%${user}%` } } : null;

    var condition = {
        [Op.and]: [
            conditionTitle,
            conditionClient,
            conditionDesc,
            conditionState,
            conditionDur,
            conditionUser
        ]
    };

    Issue.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error at issue retrieval."
            });
        });
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
