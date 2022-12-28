import React from 'react'
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return(
    <ul className="list pl0 w-100">
      {comments && comments.map(c => (
        <Comment key={c.id} message={c.message} />
      ))}
    </ul>
  )
}

export default CommentList
