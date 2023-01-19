import Comment from './Comment';
import React from 'react'

const CommentList = ({ comments, postId }) => {
  return(
    <ul className="list pl0 w-100">
      {comments && comments.map(c => (
        <>
          <div className="flex justify-between items-center">
            <Comment key={c.id} message={c.message} commentId={c.id} postId={postId} />
          </div>
        </>
      ))}
    </ul>
  )
}

export default CommentList
