const directory = require('@ab-media/package-global/routes/directory');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const projectGalleries = require('./project-galleries');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Project Galleries
  projectGalleries(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Directory
  directory(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
