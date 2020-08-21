const Models = require("../models");
const User = Models.user;
const Logging = Models.logging;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const privateKey = "null";
const saltRounds = 12;

module.exports = {
  register: (req, res, next) => {
    User.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user) {
        return res.status(401).json({ email: "Email already exists!" });
      } else {
        User.findOne({ where: { phone: req.body.phone } }).then((user) => {
          if (user) {
            return res.status(402).json({ phone: "Phone already exists!" });
          } else {
            const newUser = new User({
              username: req.body.username,
              email: req.body.email,
              phone: req.body.phone,
              password: req.body.password,
              passwordConfirm: req.body.passwordConfirm,
              address: req.body.address,
            });
            //hash password.
            bcrypt.genSalt(saltRounds, function (err, salt) {
              bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err) throw err;
                newUser.password = hash;
                newUser
                  .save()
                  .then((result) => {
                    if (req.body.password !== req.body.passwordConfirm) {
                      res.json("Password undefined");
                    } else {
                      req.body.password == req.body.passwordConfirm;
                      res.json(result);
                    }
                  })
                  .catch((err) => {
                    throw err;
                  });
              });
            });
          }
        });
      }
    });
  },
  // user login.
  login: (req, res, next) => {
    const { username, password } = req.body; //simple one.
    if (username && password) {
      User.findOne({ where: { username: username } }).then((user) => {
        if (user) {
          bcrypt.compare(password, user.password).then((response) => {
            const { id } = user;
            if (response) {
              const token = jwt.sign(
                {
                  username,
                  role: "user",
                },
                privateKey,
                {
                  expiresIn: 60 * 60,
                }
              );
              res.status(200).send({
                message: "User session",
                role: "user",
                id,
                username,
                token,
              });
              return Logging.create({
                idUser: id,
                username: user.username,
                role: "user",
                token,
                createdAt: new Date() + 7,
                updatedAt: new Date() + 7,
              }).then((newLog) => {
                Logging.build(newLog);
              });
            } else {
              res.status(417).send({
                message: "Wrong Password!!",
              });
            }
          });
        } else {
          res.status(404).send({
            message:
              "Sorry, username and password doesnt exist. Please register before login!",
          });
        }
      });
    } else {
      res.status(417).send({
        message: "Please specify username and password",
      });
    }
  },
  // get all user data.
  getData: (req, res) => {
    User.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  // get user by id.
  getDataById: (req, res) => {
    User.findOne({ where: { id: req.params.userId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // delete user data by id.
  deleteDataById: (req, res) => {
    User.destroy({ where: { id: req.params.userId } })
      .then(() =>
        res.status.json({ msg: "User has been deleted successfully!" })
      )
      .catch((err) => res.status(500).json({ msg: "Failed to delete!" }));
  },
  // update user by id.
  updateDataById: (req, res) => {
    User.update(
      {
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        address: req.body.address,
      },
      { where: { id: req.params.userId } }
    )
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }));
  },

  logout: (req, res) => {
    res.status(200).send({ message: "Logout successfully" });
  },
};
