import React, { useContext, useState } from 'react'
import { ADD_TODO_MUTATION } from '../../graphql/mutations/ADD_TODO_MUTATION';
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import { PostIdContext } from '../../contexts/postid';
import { useMutation } from '@apollo/client'

const NewTodo = ({ className, onNewTodo }) => {
  const postId = useContext(PostIdContext)

  const [formState, setFormState] = useState({
    task: ''
  })

  const [addTodo] = useMutation(ADD_TODO_MUTATION, {
    variables: {
      postId,
      task: formState.task
    },
    update: (cache, { data: { addTodo } }) => {
      const data = cache.readQuery({
        query: POSTS_QUERY,
      });

      cache.writeQuery({query: POSTS_QUERY,
        data: {
          posts: [addTodo, ...data.posts]
        }})
    },
    onCompleted: () => onNewTodo()
  })

  return(
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTodo()
        setFormState({task: ''})
      }}
    >
      <input
        autoFocus
        value={formState.task}
        className={`${className} input-reset ba b--black-20 pa2 mb2 db w-100`}
        type="text"
        onChange={(e) => setFormState({
          ...formState,
          task: e.target.value
        }) }
        placeholer="new todo"
      />
    </form>
  )
}

export default NewTodo
