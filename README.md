# Sequilize-DOC-tut


## Model Syncronization
 - User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
 - User.sync({ force: true }) - This creates the table, dropping it first if it already existed
 - User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.


## Database safety check
As shown above, the sync and drop operations are destructive. Sequelize accepts a match option as an additional safety check, which receives a RegExp:

// This will run `.sync()` only if database name ends with '_test'
`sequelize.sync({ force: true, match: /_test$/ });`

`// createdAt: "creationDate", //By using this will rename and enable only one from created at and updated at able to use in class based approach on init `