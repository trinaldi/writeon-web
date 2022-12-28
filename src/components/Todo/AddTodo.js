import React, { useState } from 'react'
import NewTodo from './NewTodo';
import Button from '../UI/Input/Button';

const AddTodo = ({ postId }) => {
  const [ newTodo, setNewTodo ] = useState(false)

  const handleSubmit = () => {
    setNewTodo(!newTodo)
  }

  return(
    <>
      {!newTodo &&
      <Button
        click={handleSubmit}
        inputStyle={'cp f6 black-60 db ma2'}>add todo</Button>
      }
      { newTodo &&
        <>
          <Button
            click={handleSubmit}
            inputStyle={'cp f6 black-60 db ma2'}>nope</Button>
          <NewTodo onNewTodo={handleSubmit} postId={postId} />
        </>
      }
    </>
  )
}

export default AddTodo
