import { gql } from "@apollo/client";

export const USER_DETAILS_WITH_POSTS_QUERY = gql`
  query GetUserDatawithPosts($input: UserDetailsInput) {
    getUserDatawithPosts(input: $input) {
      userData {
        id
        name
        email
      }
      posts {
        id
        title
        body
      }
    }
  }
`;

export const UPDATE_PASSENGER_DETAILS_QUERY = gql`
  mutation UpdatePassengerDetails($input: PassengerDetailsInput) {
    updatePassengerDetails(input: $input) {
      _id
      name
      trips
      airline {
        country
        id
        established
        name
        website
      }
    }
  }
`;
