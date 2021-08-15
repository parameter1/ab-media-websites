module.exports = (app) => {
  app.get('/:alias(contact-us|contact-us.html)', (req, res) => {
    res.redirect(301, '/page/contact-us');
  });
  app.get('/:alias(about-us|about-us.html)', (req, res) => {
    res.redirect(301, '/page/about-us');
  });
  app.get('/:alias(feed)', (req, res) => {
    res.redirect(301, '/__rss/website-scheduled-content.xml?input=%7B"sectionAlias"%3A"home"%7D');
  });
};
