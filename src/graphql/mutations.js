import { gql } from "@apollo/react-hooks";

export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATEREVIEW = gql`
  mutation createReview( $repoOwnerName: String!, $repoName: String!, $rating: Int!, $review: String! ) {
    createReview( review: { ownerName: $repoOwnerName, repositoryName: $repoName, rating: $rating, text: $review } ) {
      repositoryId
    }
  }
`