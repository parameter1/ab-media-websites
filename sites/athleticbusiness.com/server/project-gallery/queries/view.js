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
      primaryImageEdge {
        node {
          id
          src
          alt
          caption
        }
      }
    }
  }
`;
