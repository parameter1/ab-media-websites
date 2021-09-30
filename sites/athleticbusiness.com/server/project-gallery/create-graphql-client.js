const createApolloClient = require('@parameter1/base-cms-apollo-ssr');
const pkg = require('../../package.json');

const { AB_PROJECTS_GRAPHQL_URL } = process.env;

module.exports = () => {
  if (!AB_PROJECTS_GRAPHQL_URL) throw new Error('No projects GraphQL URL has been configured.');
  return createApolloClient({
    uri: AB_PROJECTS_GRAPHQL_URL,
    config: { name: pkg.name, version: pkg.version },
  });
};
