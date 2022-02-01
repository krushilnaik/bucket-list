import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_WISH = gql`
  mutation addWish($wishText: String!) {
    addWish(wishText: $wishText) {
      _id
      wishText
      createdAt
      username
    }
  }
`;

export const COMPLETE_WISH = gql`
  mutation completeWish($wishId: ID!) {
    completeWish(wishId: $wishId) {
      _id
      wishText
      createdAt
      username
    }
  }
`;
