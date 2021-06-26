const Sequelize = require("sequelize");

// Sequelize connection and authentication link setup
const sequelize = new Sequelize("school", "postgres", "123456789", {
  dialect: "postgres",
  host: "localhost",
  logging: (...msg) => console.log(msg),
});

// Authentication connected or not
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established");
  })
  .catch((err) => console.error(`Error connecting  :  ${error}  `));

module.exports = sequelize;
