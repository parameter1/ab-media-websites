const gql = require('graphql-tag');

module.exports = gql`
  query ProjectGalleryListPage($input: QueryEntriesInput!) {
    entries(input: $input) {
      edges {
        node {
          id
          type {
            id
            slug
          }
          shortId
          slug
          title
          cost
          year
          winner
          city
          region
          primaryImageEdge {
            node {
              id
              src(input: { options: { w: 250, h: 167, fit: "crop" } })
              alt
            }
          }
          architectsOfRecord: organizationsConnection(input: {
            sort: { field: NODE_NAME }
            role: { slugs: "architect-of-record" }
          }) {
            edges {
              node {
                id
                name
              }
            }
          }
          associateArchitects: organizationsConnection(input: {
            sort: { field: NODE_NAME }
            role: { slugs: "associate-architect" }
          }) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
