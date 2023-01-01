import React, { useState } from 'react'
import NewTodo from './NewTodo';
import ButtonLink from '../UI/Input/ButtonLink';

const AddTodo = ({ postId }) => {
  const [ newTodo, setNewTodo ] = useState(false)

  const handleSubmit = () => {
    setNewTodo(!newTodo)
  }

  return(
    <>
      {!newTodo &&
      <ButtonLink
        click={handleSubmit}
        inputStyle={'cp f6 black-60 db ma2'}>add todo</ButtonLink>
      }
      { newTodo &&
        <>
          <ButtonLink
            click={handleSubmit}
            inputStyle={'cp f6 black-60 db ma2'}>nope</ButtonLink>
          <NewTodo onNewTodo={handleSubmit} postId={postId} />
        </>
      }
    </>
  )
}

export default AddTodo
