import React from 'react'

const Todo = (props) => {
  const { id, done, task } = props

  const completed = done ? 'strike bg-washed-green' : ''

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
              onChange={() => !done}
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
