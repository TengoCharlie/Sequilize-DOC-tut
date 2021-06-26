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

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1 AUtomatically insert a Unique ID in it
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true, //To prevent sql to rename the table according to it (This is for perticular table)
    // timestamps: false, //to desable created at and updated at
  }
);

const Person = sequelize.define("Person", {
  name: {
    type: DataTypes.STRING,
    defaultValue: "John Doe",
  },
});

const Foo = sequelize.define("Foo", {
  bar: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    // This way, the current date/time will be used to populate this column (at the moment of insertion)
  },
});

// Model Syncronization
// User.sync({ force: true }); //this is mendatory to use this to create table in DB or to recreate table

// Sync all models
sequelize.sync({ force: true }); //This method is use to sync all models in the table

// User.drop(); //to drop table
// sequelize.drop(); //to drop all tables

console.log(User === sequelize.models.User);

module.exports = sequelize;
