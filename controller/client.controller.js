const db = require("../model");
const Client = db.client;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    
    console.log("VALUE: " + req.body.name);
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    const client = {
        name: req.body.name,
    };
    
    Client.create(client)
        .then(data => {
            res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin');
            res.header('Access-Control-Allow-Origin', '*');
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Client."
            });
        });
};


exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Client.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error at client retrieval."
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;
    Client.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Client was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Client with id=" + id
          
      });
    });
};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
