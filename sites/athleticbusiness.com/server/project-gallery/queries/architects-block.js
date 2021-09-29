const gql = require('graphql-tag');

module.exports = gql`
  query ProjectArchitectsBlock($shortId: String!) {
    entryByShortId(input: { shortId: $shortId }) {
      id
      organizationsConnection(input: {
        pagination: { limit: 50 }
        sort: { field: ROLE_NODE_NAME, order: ASC }
      }) {
        edges {
          roleEdge {
            node {
              id
              name
            }
          }
          node {
            id
            name
            city
            region
            website
          }
        }
      }
    }
  }
`;
