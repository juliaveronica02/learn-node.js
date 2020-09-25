const Jobdesk = require("../models/Jobdesk");

module.exports = {
  create: (req, res) => {
    Jobdesk.create({
      title: req.body.title,
      department: req.body.department,
      userId: req.body.userId,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  showAll: (req, res) => {

    // add populate to join multiple collection
    Jobdesk.find({}).populate({path: 'userId'})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};