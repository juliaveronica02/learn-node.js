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
                      res.json("Password NOT match!");
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
            // create user id when register.
            const { id } = user;
            if (response) {
              const token = jwt.sign(
                {
                  username,
                  // role.
                  role: "user",
                },
                privateKey,
                {
                  expiresIn: 60 * 60,
                }
              );
              // return success.
              res.status(200).send({
                message: "User session",
                role: "user",
                id,
                username,
                token,
              });
              // create login.
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
              "Sorry, username and password doesn't exist. Please register before login!",
          });
        }
      });
    } else {
      res.status(417).send({
        message: "Please specify username and password!",
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
  // delete account using password.
  deleteAccount: async (req, res) => {
    const id = Number(req.params.id);
    const { password } = req.body;
    if (id) {
      User.findByPk(id).then((users) => {
        if (users) {
          if (password) {
            bcrypt.compare(password, users.password).then((response) => {
              if (response) {
                User.destroy({ where: { id: id } }).then(() =>
                  res.status(200).send({ message: "Account deleted!" })
                );
              } else {
                res.status(404).send({
                  message: "Wrong password!",
                });
              }
            });
          } else {
            res.status(417).send({ message: "Please input password!" });
          }
        } else {
          res.status(404).send({ message: "User doesnt exist!" });
        }
      });
    } else res.status(417).send({ message: "Please specify User ID!" });
  },
  // update user by id.
  updateDataById: (req, res) => {
    const { id } = req.params;
    const { password, email, username, phone, address } = req.body;
    if (id) {
      User.findOne({ where: { id: id } }).then((user) => {
        if (user) {
          if (password && email) {
            bcrypt
              .hash(password, saltRounds)
              .then((hash) => {
                User.update(
                  {
                    email,
                    password: hash,
                    username,
                    phone,
                    address,
                    updatedAt: new Date() + 7,
                  },
                  { where: { id: id } }
                );
              })
              .then(() => {
                res.status(200).send({
                  message: "Profile updated!",
                });
              });
          } else {
            res.status(417).send({
              message: "Please specify password field and email!",
            });
          }
        } else {
          res.status(417).send({
            message: "No user found!",
          });
        }
      });
    } else {
      res.status(417).send({
        message: "Please specify User ID!",
      });
    }
  },
  logout: (req, res) => {
    res.status(200).send({ message: "Logout successfully!" });
  },
};
