import { gql } from "@apollo/react-hooks";

export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview( $repoOwnerName: String!, $repoName: String!, $rating: Int!, $review: String! ) {
    createReview( review: { ownerName: $repoOwnerName, repositoryName: $repoName, rating: $rating, text: $review } ) {
      repositoryId
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      username
    }
  }
`;