import { gql } from '@apollo/client'

export const CREATE_POST_MUTATION = gql`
  mutation($title: String!, $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      post {
        id
        title
        body
        comment {
          id
          message
        }
        todo {
          id
          done
          task
        }
      }
    }
  }
`
