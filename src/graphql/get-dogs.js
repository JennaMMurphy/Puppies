import gql from "graphql-tag";

const GET_DOGS = gql`
  query dogs {
    dogs {
      key
      name
      breed
      color
      imageUrl
      description
      likes
    }
  }
`;

export default GET_DOGS;
