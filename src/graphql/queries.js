import { gql } from 'apollo-boost';

const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
`;

const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...repositoryDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query getRepository( $id: ID!, $first: Int!, $after: String){
    repository(id: $id ) {
      ...repositoryDetails
      reviews (first: $first, after: $after) {
        edges {
          node {
            ...reviewDetails
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`;

export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false, $first: Int, $after: String) {
    authorizedUser {
      id
      username
      reviews (first: $first, after: $after) {
        edges @include(if: $includeReviews) {
          node {
            repository {
              fullName
              id
            }
            ...reviewDetails
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;
