const gql = require('graphql-tag');

const fragment = gql`

fragment ViewNextProjectBlockFragment on Entry {
  id
  shortId
  slug
  title
  city
  region
  publishedAt
  primaryImageEdge { node { id src alt } }
}

`;

module.exports = gql`
  query ViewNextProjectBlock($previous: QueryEntriesInput!, $next: QueryEntriesInput) {
    previous: entries(input: $previous) {
      edges {
        node {
          ...ViewNextProjectBlockFragment
        }
      }
    }

    next: entries(input: $next) {
      edges {
        node {
          ...ViewNextProjectBlockFragment
        }
      }
    }
  }

  ${fragment}
`;
