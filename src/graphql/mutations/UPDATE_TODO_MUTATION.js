import { gql } from '@apollo/client'

export const UPDATE_TODO_MUTATION = gql`
  mutation($postId: String!, $todoId: String!, $done: Boolean!) {
    updateTodo(input: {postId: $postId, todoId: $todoId, done: $done}) {
      errors
      post {
        id
        title
        body
        comment {
          id
          name
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
