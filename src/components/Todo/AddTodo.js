import React, { useState } from 'react'
import NewTodo from './NewTodo';

const AddTodo = (props) => {
  const { postId } = props

  const [ newTodo, setNewTodo ] = useState(false)

  const handleSubmit = () => {
    setNewTodo(false)
  }

  return(
    <>
      {!newTodo &&
      <small
        onClick={() => setNewTodo(!newTodo)}
        className="cp f6 black-60 db ma2">
        add todo
      </small>
      }
      { newTodo &&
        <div>
          <small
            onClick={handleSubmit}
            className="cp f6 black-60 db ma2">
            nope
          </small>
          <NewTodo onNewTodo={handleSubmit} postId={postId} />
        </div>
      }
    </>
  )
}

export default AddTodo
