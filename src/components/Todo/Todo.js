import React, { useContext } from 'react'
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import { PostIdContext } from '../../contexts/postid';
import { UPDATE_TODO_MUTATION } from '../../graphql/mutations/UPDATE_TODO_MUTATION';
import { useMutation } from '@apollo/client'

const Todo = ({ id, done, task }) => {
  const postId = useContext(PostIdContext)
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
    <li key={id} className="w-100 mw7-ns hidden bl">
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
    </li>
  )
}

export default Todo
