const { getAsObject } = require('@parameter1/base-cms-object-path');
const digitalEdition = require('../templates/digital-edition');

module.exports = (app, siteConfig) => {
  app.get('/images/digitalissues/:code([0-9]{4})', (req, res) => {
    const { redirects } = getAsObject(siteConfig, 'digitalEdition');
    const zmagId = redirects[req.params.code];
    const to = `/digital-edition/${zmagId}`;
    res.redirect(301, to);
  });

  app.get('/digital-edition/:id([a-fA-F0-9]{8})', (req, res) => {
    res.marko(digitalEdition, { id: req.params.id });
  });
};
