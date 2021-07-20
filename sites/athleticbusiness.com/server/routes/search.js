const template = require('@ab-media/package-global/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};
