const gql = require('graphql-tag');

module.exports = gql`
  query ProjectGalleryLookupRedirect($entity: String!) {
    entry: entryByImportEntity(input: { entity: $entity }) {
      id
      type {
        id
        slug
      }
      shortId
      slug
    }
  }
`;
