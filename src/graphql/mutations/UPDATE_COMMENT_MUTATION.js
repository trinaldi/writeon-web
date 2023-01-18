import { gql } from '@apollo/client'

export const UPDATE_COMMENT_MUTATION = gql`
  mutation($commentId: String!, $message: String!, $postId: String!) {
    updateComment( input: { commentId: $commentId, message: $message, postId: $postId}) {
      errors
      post {
        body
        comment {
          id
          message
          name
        }
        id
        mood {
          id
          mood
        }
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
