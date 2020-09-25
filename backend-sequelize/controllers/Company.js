const Models = require("../models");
const Company = Models.Company;

module.exports = {
  create: (req, res) => {
    Company.create({
      name: req.body.name,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  
  showAll: (req, res) => {
    Company.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
