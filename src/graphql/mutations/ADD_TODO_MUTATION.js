import { gql } from '@apollo/client'

export const ADD_TODO_MUTATION = gql`
mutation($task: String!, $postId: String!) {
  addTodo(input: { done: false, task: $task, postId: $postId }) {
    errors
    post {
      body
      comment {
        id
        name
        message
      }
      id
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
