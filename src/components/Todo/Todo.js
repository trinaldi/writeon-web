import React from 'react'
import { useMutation, gql } from '@apollo/client'
import { POSTS_QUERY } from '../Post/PostList';

const UPDATE_TODO_MUTATION = gql`
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

const Todo = (props) => {
  const { postId, id, done, task } = props

  const completed = done ? 'strike bg-washed-green' : ''

  const [updateTodo] = useMutation(UPDATE_TODO_MUTATION, {
    variables: {
      postId,
      todoId: id,
      done: !done
    },


    update: (cache, { data: { updateTodo } }) => {
      const data = cache.readQuery({
        query: POSTS_QUERY,
      });

      cache.writeQuery({query: POSTS_QUERY,
        data: {
          posts: [updateTodo, ...data.posts]
        }})
    },
  })

  return (
    <article key={id} className="mw3 mw6-ns hidden bl">
      <form className="pa1">
        <fieldset id="my_todos" className="pa0 bn">
          <div className="flex items-center">
            <input
              checked={done}
              className="mr2"
              type="checkbox"
              id="todo1"
              onChange={() => !updateTodo()}
            />
            <label className={`lh-copy ${completed}`} htmlFor="todo1">
              {task}
            </label>
          </div>
        </fieldset>
      </form>
    </article>
  )
}

export default Todo
