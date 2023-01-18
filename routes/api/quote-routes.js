const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Quote } = require('../../models');

router.get('/dailyList', (req, res) => {
  Quote.findAll({
    order: [['created_at', 'DESC']],
  })
    .then(dbQuoteData => res.json(dbQuoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:quoteId', (req, res) => {
  Quote.findByPk(req.params.quoteId)
    .then(dbQuoteData => res.json(dbQuoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// TODO: update quotes based on ieX


module.exports = router;


