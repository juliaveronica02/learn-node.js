const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Book = sequelize.define(
  "book",
  {
    bookTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    years: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    image: {
      type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
    }
  },
  { freezeTableName: true }
);
module.exports = Book