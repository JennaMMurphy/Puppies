import gql from "graphql-tag";

export const GET_DOGS = gql`
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

// commented out because I haven't quite figured muattions out yet lol
// export const MUTATE_DOGS = gql`
//   mutation likeDog($key: ID!) {
//   likeDog(key: $key) {
//     name
//     likes
//   }
// }
// `
