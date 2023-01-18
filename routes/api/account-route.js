const router = require('express').Router();
const sequelize = require('../../config/connection');
const { AccountTransaction, Trader } = require('../../models');

router.get('/transactionHistory/:traderId', (req, res) => {
  AccountTransaction.findAll({
    order: [['created_at', 'DESC']],
    where: {trader_id: req.params.traderId}
  })
    .then(dbTransactionData => res.json(dbTransactionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/accountBalance/:traderId', async (req, res) => {
  try {
    const transactionData = await getAccountBalance(req.params.traderId)
    res.json(transactionData)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  })

router.post('/deposit/:traderId', async (req, res) => {
  try {
    const transactionAmount = req.body.amount;
    const traderId = req.params.traderId
    if (transactionAmount <= 0) {
      res.status(400).json({error:"Cannot deposit 0 or negative amount"})
    }
    const transactionData = await createTransaction(transactionAmount, traderId)
    res.json(transactionData)
    }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
router.post('/withdraw/:traderId', async (req, res) => {
  try {
    const transactionAmount = req.body.amount;
    const traderId = req.params.traderId
    const accountData = await getAccountBalance(traderId)
    if ((accountData[0].total_amount - transactionAmount) < 0) {
      res.status(400).json({error: "Insufficient funds to withdraw"})
    }
    const transactionData = await createTransaction(transactionAmount * -1,traderId)
    res.json(transactionData)
  }
  
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;


function createTransaction(transactionAmount, traderId) {
  return AccountTransaction.create({amount:transactionAmount, trader_id: traderId})
  
}
function getAccountBalance(traderId) {
  return AccountTransaction.findAll({
    raw: true,
    attributes: [
      'trader_id',
      [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
    ],
    where: { trader_id: traderId },
    group: ['trader_id']
  });
}

