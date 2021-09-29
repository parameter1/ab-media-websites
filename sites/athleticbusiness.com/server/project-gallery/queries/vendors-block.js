const gql = require('graphql-tag');

module.exports = gql`
  query ProjectVendorsBlock($shortId: String!) {
    entryByShortId(input: { shortId: $shortId }) {
      id
      vendorsConnection(input: {
        pagination: { limit: 100 }
        sort: { field: CATEGORY_NODE_FULL_NAME, order: ASC }
      }) {
        edges {
          categoryEdge {
            writeInValue
            node {
              id
              canWriteIn
              fullName
            }
          }
          node {
            id
            name
            website
          }
        }
      }
    }
  }
`;
