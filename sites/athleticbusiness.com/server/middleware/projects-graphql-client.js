const createClient = require('../project-gallery/create-graphql-client');

module.exports = () => ((req, res, next) => {
  const client = createClient();
  req.$projectsGraphQL = client;
  res.locals.$projectsGraphQL = client;
  next();
});
