import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {
  const { postId, items } = props
  return (
    <>
      {
        items && items.map(t => (
          <Todo
            key={t.id}
            done={t.done}
            task={t.task}
            postId={postId}
            id={t.id}
          />
        ))
      }
    </>
  )
}

export default TodoList
