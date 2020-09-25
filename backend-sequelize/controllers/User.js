const Models = require("../models");
const User = Models.User;

module.exports = {
  create: (req, res) => {
    User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      companyId: req.body.companyId,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  showAll: (req, res) => {
    User.findAll({ include: "company" })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
