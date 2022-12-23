import React from 'react'
import Comment from './Comment'

const Post = props => {
  const { post } = props
  return (
    <div key={props.id}>
      <strong><p>{post.title}</p></strong>
      <p>{post.body}</p>
      {post.comment && post.comment.map(c => (
        <Comment key={c.id} message={c.message} />
      ))}
    </div>
  )
}

export default Post
