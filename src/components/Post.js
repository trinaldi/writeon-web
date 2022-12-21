import React from 'react'

const Post = props => {
  const { post } = props

  return (
    <div>
      <strong><p>{post.title}</p></strong>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
