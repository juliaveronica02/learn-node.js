const User = require("../models/User");

module.exports = {
  create: (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        jobdeskId: req.body.jobdeskId,
        companyId: req.body.companyId,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  showAll: (req, res) => {
    // add populate to join multiple collection
    User.find({}).populate({path: 'companyId'}).populate({path: 'jobdeskId'})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};