const Model = require("../models");
const Jobdesk = Model.Jobdesk;
const User = Model.User;
const Company = Model.Company;

module.exports = {
  create: (req, res) => {
    Jobdesk.create({
      title: req.body.title,
      department: req.body.department,
      userId: req.body.userId,
      companyId: req.body.companyId,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  showAll: (req, res) => {
    Jobdesk.findAll({
        include: [
            // show joining table with include configure
            { 
              model: User,
              as: 'user',
              include: [{model: Company, as: 'company'}]
            }
          ]
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
