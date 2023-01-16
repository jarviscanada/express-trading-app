const { Trader } = require('../models');

const userdata = [
  {
    firstName: 'Trader',
    lastName: 'Joe',
    email: 'joe@trader.ca',
    dob: new Date(),
    country: 'Canada'
  },
  {
    firstName: 'Biddy',
    lastName: 'McBidface',
    email: 'bid@biddy.ca',
    dob: new Date(),
    country: 'USA'
  },
];

const seedTraders = () => Trader.bulkCreate(userdata, { returning: true });

module.exports = seedTraders;
