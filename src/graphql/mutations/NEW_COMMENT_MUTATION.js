import { gql } from '@apollo/client'

export const NEW_COMMENT_MUTATION = gql`
  mutation($message: String!, $postId: String!) {
    addComment(input: { message: $message, postId: $postId  }) {
      clientMutationId
      errors
      post {
        comment {
          id
          message
        }
      }
    }
  }
`
