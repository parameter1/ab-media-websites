const gql = require('graphql-tag');

module.exports = gql`
  query ProjectGalleryViewPage($input: QueryEntryByShortIdInput!) {
    entryByShortId(input: $input) {
      id
      type {
        id
        slug
      }
      shortId
      slug
      title
      teaser
      body
      publishedAt
      year
      city
      region
      judgesComments
      area
      cost
      occupancy
      primaryImageEdge {
        node {
          id
          src
          alt
          caption
          credit
        }
      }
      imagesConnection(input: {
        pagination: { limit: 50 }
        sort: { field: SEQUENCE, order: ASC }
      }) {
        edges {
          node {
            id
            src
            alt
            caption
            credit
          }
        }
      }
    }
  }
`;
