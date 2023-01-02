import { gql } from '@apollo/client'

export const ADD_MOOD_MUTATION = gql`
mutation($mood: String!, $postId: String!) {
  addMood(input: { mood: $mood, postId: $postId }) {
    errors
    post {
      body
      comment {
        id
        name
        message
      }
      id
      mood {
        id
        mood
      }
      title
      todo {
        id
        task
        done
      }
    }
  }
}
`
