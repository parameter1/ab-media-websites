const digitalEdition = require('../templates/digital-edition');

module.exports = (app) => {
  app.get('/digital-edition/:id([a-fA-F0-9]{8})', (req, res) => {
    res.marko(digitalEdition, { id: req.params.id });
  });
};
