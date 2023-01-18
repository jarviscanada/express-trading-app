const { AccountTransaction } = require('../models');

const accountTransactionData = [
  {
    amount: 10,
    trader_id: 1
  },
  {
    amount: 10,
    trader_id: 1
  },
  {
    amount: -5,
    trader_id: 1
  },
  {
    amount: 10,
    trader_id: 2
  },
  {
    amount: -5,
    trader_id: 2
  },
  {
    amount: 25,
    trader_id: 2
  },
  
];

const seedTransactions = () => AccountTransaction.bulkCreate(accountTransactionData);

module.exports = seedTransactions;
