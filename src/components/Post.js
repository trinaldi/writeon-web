import React from 'react'
import Comment from './Comment'
import TodoList from './TodoList';

const Post = props => {
  const { post } = props
  return (
    <div key={props.id} className="mt4 mb4 pa3 shadow-4">
      <strong><p className="f4 underline">{post.title}</p></strong>
      <TodoList />
      <p>{post.body}</p>
      {post.comment && post.comment.map(c => (
        <Comment key={c.id} message={c.message} />
      ))}
    </div>
  )
}

export default Post
