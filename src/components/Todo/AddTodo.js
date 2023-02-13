import React, { useState } from 'react'
import NewTodo from './NewTodo';
import ButtonLink from '../UI/Input/ButtonLink';

const AddTodo = () => {
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
          <NewTodo className="mt3" onNewTodo={handleSubmit} />
          <ButtonLink
            click={handleSubmit}
            className={'cp f6 black-60'}>
            nope
          </ButtonLink>
        </>
      }
    </>
  )
}

export default AddTodo
