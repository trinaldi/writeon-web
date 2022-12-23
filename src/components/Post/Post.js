import CommentList from '../Comments/CommentList'
import NewComment from '../Comments/NewComment';
import React from 'react'
import TodoList from '../Todo/TodoList';

const Post = props => {
  const { post } = props
  return (
    <div className="mt4 mb4 pa3 shadow-4">
      <strong><p className="f4 underline">{post.title}</p></strong>
      <TodoList items={post.todo} postId={post.id} />
      <p>{post.body}</p>
      <CommentList comments={post.comment} />
      <NewComment postId={post.id} />
    </div>
  )
}

export default Post
