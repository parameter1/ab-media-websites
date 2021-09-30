const gql = require('graphql-tag');

module.exports = gql`
  query FeaturedFOWBlock($input: QueryMostRecentFacilityOfTheWeekInput!) {
    mostRecentFacilityOfTheWeek(input: $input) {
      id
      shortId
      slug
      type { id slug }
      title
      city
      region
      imagesConnection(input: {
        sort: { field: SEQUENCE, order: ASC }
        pagination: { limit: 3 }
      }) {
        edges { node { id src alt } }
      }
    }
  }
`;
