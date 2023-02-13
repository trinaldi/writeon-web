import React from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';

const TodoList = ({ items }) => {

  return (
    <ul className="list pl0 w-100">
      {
        items && items.map(t => (
          <Todo
            key={t.id}
            done={t.done}
            task={t.task}
            id={t.id}
          />
        ))
      }
      <AddTodo />
    </ul>
  )
}

export default TodoList
