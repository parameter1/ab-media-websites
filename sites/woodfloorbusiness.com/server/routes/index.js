const directory = require('@ab-media/package-global/routes/directory');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const websiteSections = require('./website-section');
const forumRedirects = require('./forum-redirects');

module.exports = (app) => {
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Directory
  directory(app);

  // Forum redirects
  forumRedirects(app);

  // Website Sections
  websiteSections(app);
};
