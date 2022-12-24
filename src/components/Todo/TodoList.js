import React from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';

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
      <AddTodo postId={postId}/>
    </>
  )
}

export default TodoList
