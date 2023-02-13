import Comment from './Comment';
import React from 'react'

const CommentList = ({ comments }) => {
  return(
    <ul className="list pl0 w-100">
      {comments && comments.map(c => (
        <>
          <div className="flex items-baseline">
            ⤷ <Comment key={c.id} message={c.message} commentId={c.id} />
          </div>
        </>
      ))}
    </ul>
  )
}

export default CommentList
