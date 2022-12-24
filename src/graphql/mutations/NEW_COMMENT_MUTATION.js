import { gql } from '@apollo/client'

export const NEW_COMMENT_MUTATION = gql`
  mutation newComment($message: String!, $postId: String!) {
    addComment(input: { message: $message, postId: $postId  }) {
      clientMutationId
      errors
      post {
        body
        comment {
          id
          message
          name
        }
        id
        title
        todo {
          done
          id
          task
        }
      }
    }
  }
`
