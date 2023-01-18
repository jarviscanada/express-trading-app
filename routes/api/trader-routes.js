const router = require('express').Router();
const { Trader } = require('../../models');

// get all traders
router.get('/', (req, res) => {
  Trader.findAll({
  })
    .then(dbTraderData => res.json(dbTraderData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a trader
router.post('/', (req, res) => {
  Trader.create(req.body)
    .then(dbTraderData => {
      res.json(dbTraderData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:traderId', (req, res) => {
  Trader.destroy({
    where: {
      id: req.params.traderId
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No trader found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// TODO: deposit funds
// TODO: withdraw funds

module.exports = router;
