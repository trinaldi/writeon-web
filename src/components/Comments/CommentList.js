import Comment from './Comment';
import React from 'react'
import UpdateComment from './UpdateComment';

const CommentList = ({ comments, postId }) => {
  return(
    <ul className="list pl0 w-100">
      {comments && comments.map(c => (
        <>
          <div className="flex justify-between items-center">
            <Comment key={c.id} message={c.message} />
            <UpdateComment oldMessage={c.message} commentId={c.id} postId={postId}/>
          </div>
        </>
      ))}
    </ul>
  )
}

export default CommentList
