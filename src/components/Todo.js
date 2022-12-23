import React, { useState } from 'react'

const Todo = () => {
  const [done, setDone] = useState(false)
  const isDone = done ? 'strike bg-washed-green' : ''

  return (
    <article className="mw3 mw6-ns hidden bl">
      <form className="pa1">
        <fieldset id="my_todos" className="pa0 bn">
          <div className="flex items-center">
            <input
              className="mr2"
              type="checkbox"
              id="todo1"
              onChange={() => setDone(!done)}
            />
            <label className={`lh-copy ${isDone}`} htmlFor="todo1">My first todo</label>
          </div>
        </fieldset>
      </form>
    </article>
  )
}

export default Todo
