import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { POSTS_QUERY } from '../Post/PostList';

const NEW_COMMENT_MUTATION = gql`
  mutation($message: String!, $postId: String!) {
    addComment(input: { message: $message, postId: $postId  }) {
      clientMutationId
      errors
      post {
        comment {
          id
          message
        }
      }
    }
  }
`
const NewComment = (props) => {
  const { postId } = props
  const [formState, setFormState] = useState({
    postId: '',
    message: ''
  })

  const [newComment] = useMutation(NEW_COMMENT_MUTATION, {
    variables: {
      postId: postId,
      message: formState.message,
    },
    update: (cache, { data: { addComment } }) => {
      const data = cache.readQuery({
        query: POSTS_QUERY,
      });

      cache.writeQuery({query: POSTS_QUERY,
        data: {
          posts: [newComment, ...data.posts]
        }})

    }
  })

  return (
    <form
      className="ml3 black-80"
      onSubmit={(e) => {
        e.preventDefault()
        newComment()
        setFormState({postId: '', message: ''})
      }}
    >
      <div className="measure">
        <input
          id="comment"
          post={postId}
          className="input-reset ba b--black-20 pa1 mb2 db w-100"
          value={formState.message}
          onChange={(e) => setFormState({
            ...formState,
            message: e.target.value
          })}
          type="text"
          placeholder="new comment..." />
      </div>
    </form>
  )
}

export default NewComment
