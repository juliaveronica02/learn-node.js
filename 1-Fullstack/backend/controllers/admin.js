const Models = require("../models");
const Admin = Models.admin;
const Logging = Models.logging;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const privateKey = "null";
const saltRounds = 12;

module.exports = {
    show: (req, res) => {
        User.findAll({ attributes: { exclude: ["password"] } }).then(data =>
          res.status(200).send(data)
        );
      },
  register: (req, res, next) => {
    Admin.findOne({ where: { email: req.body.email } }).then((admin) => {
      if (admin) {
        return res.status(401).json({ email: "Email already exists!" });
      } else {
        Admin.findOne({ where: { username: req.body.username } }).then((admin) => {
          if (admin) {
            return res.status(402).json({ username: "Username already exists!" });
          } else {
            const newAdmin = new Admin({
              username: req.body.username,
              email: req.body.email,
              fullname: req.body.fullname,
              password: req.body.password,
              passwordConfirm: req.body.passwordConfirm,
            });
            //hash password.
            bcrypt.genSalt(saltRounds, function (err, salt) {
              bcrypt.hash(newAdmin.password, salt, function (err, hash) {
                if (err) throw err;
                newAdmin.password = hash;
                newAdmin
                  .save()
                  .then((result) => {
                    if (req.body.password !== req.body.passwordConfirm) {
                      res.json("Password not match!");
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
  // admin login.
  login: (req, res, next) => {
    const { username, password } = req.body; //simple one.
    if (username && password) {
      Admin.findOne({ where: { username: username } }).then((admin) => {
        if (admin) {
          bcrypt.compare(password, admin.password).then((response) => {
            if (response) {
              const token = jwt.sign(
                {
                  username,
                  // role.
                  role: "admin",
                },
                privateKey,
                {
                  expiresIn: 60 * 60,
                }
              );
              // return success.
              res.status(200).send({
                message: "Admin session!",
                role: "admin",
                username,
                token,
              });
              // create login.
              return Logging.create({
                idUser: admin.id,
                username: admin.username,
                role: "admin",
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
  // get all admin data.
  getData: (req, res) => {
    Admin.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  // get admin by id.
  getDataById: (req, res) => {
    Admin.findOne({ where: { id: req.params.adminId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // delete user data by id.
  deleteDataById: (req, res) => {
    Admin.destroy({ where: { id: req.params.adminId } })
      .then(() =>
        res.status.json({ msg: "Admin has been deleted successfully!" })
      )
      .catch((err) => res.status(500).json({ msg: "Failed to delete!" }));
  },
  // delete account using password.
  deleteAccount:(req, res) => {
    const id = Number(req.params.id);
    const { password } = req.body;
    if (id) {
      // findByPk (find by primary key = id).
      Admin.findByPk(id).then((admin) => {
        if (admin) {
          if (password) {
            bcrypt.compare(password, admin.password).then((response) => {
              if (response) {
                Admin.destroy({ where: { id: id } }).then(() =>
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
          res.status(404).send({ message: "Admin doesn't exist!" });
        }
      });
    } else res.status(417).send({ message: "Please specify Admin ID!" });
  },
  // update admin by id.
  updateDataById: (req, res) => {
    const { id } = req.params;
    const { password, email, username, phone, address } = req.body;
    if (id) {
      Admin.findOne({ where: { id: id } }).then((admin) => {
        if (admin) {
          if (password && email) {
            bcrypt
              .hash(password, saltRounds)
              .then((hash) => {
                Admin.update(
                  {
                    email,
                    password: hash,
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
            message: "Admin NOT found!",
          });
        }
      });
    } else {
      res.status(417).send({
        message: "Please specify Admin ID!",
      });
    }
  },
  logout: (req, res) => {
    res.status(200).send({ message: "Logout successfully!" });
  },
};
