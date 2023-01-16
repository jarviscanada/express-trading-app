const seedTraders = require('./trader-seeds');
const seedQuotes = require('./quotes-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedTraders();
  console.log('--------------');

  await seedQuotes();
  console.log('--------------');
  process.exit(0);
};

seedAll();
