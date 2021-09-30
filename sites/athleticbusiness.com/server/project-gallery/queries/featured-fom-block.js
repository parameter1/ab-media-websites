const gql = require('graphql-tag');

module.exports = gql`
  query FeaturedFOMBlock($input: QueryEntriesInput!) {
    entries(input: $input) {
      edges {
        node {
          id
          primaryImageEdge {
            node {
              id
              src
              alt
            }
          }
        }
      }
    }
  }
`;
