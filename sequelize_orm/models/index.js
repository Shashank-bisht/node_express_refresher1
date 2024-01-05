const Sequelize = require('sequelize');

const sequelize = new Sequelize('employeedb', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database established successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
