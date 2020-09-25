const Models = require("../models");
const User = Models.User

module.exports = {
  showAll: (req, res) => {
    User.findAll({include: 'company' })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
