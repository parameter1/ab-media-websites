const createApolloClient = require('@parameter1/base-cms-apollo-ssr');
const pkg = require('../../package.json');

module.exports = ({ uri } = {}) => ((req, res, next) => {
  if (uri) {
    const client = createApolloClient({
      uri,
      config: { name: pkg.name, version: pkg.version },
    });
    req.$projectsGraphQL = client;
    res.locals.$projectsGraphQL = client;
  }
  next();
});
