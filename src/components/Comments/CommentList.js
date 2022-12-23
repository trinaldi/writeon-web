import React from 'react'
import Comment from './Comment';

const CommentList = (props) => {
  return(
    <>
      {props.comments && props.comments.map(c => (
        <Comment key={c.id} message={c.message} />
      ))}
    </>
  )
}

export default CommentList
