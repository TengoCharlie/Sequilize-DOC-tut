const { Sequelize, DataTypes, Model } = require("sequelize");

// Sequelize connection and authentication link setup
const sequelize = new Sequelize("school", "postgres", "123456789", {
  dialect: "postgres",
  host: "localhost",
  logging: (...msg) => console.log(msg),
  define: {
    freezeTableName: true, //To prevent sql to rename the table according to it (This is global)
  },
});

// Authentication connected or not
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established");
  })
  .catch((err) => console.error(`Error connecting  :  ${error}  `));

// Model Defination =============================
// Using Define method
/*
const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },{
    freezeTableName: true, //To prevent sql to rename the table according to it (This is for perticular table)
    tableName: 'employee',  //This is to give any name to table either use this or freezeTableName option
  }
});
console.log(User === sequelize.models.User);
*/

// Usign Model init (Extending Model)

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);
console.log(User === sequelize.models.User);

module.exports = sequelize;
