import React, { useState } from 'react'
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import { UPDATE_COMMENT_MUTATION } from '../../graphql/mutations/UPDATE_COMMENT_MUTATION';
import { useMutation } from '@apollo/client'

const UpdateComment = ({ commentId, oldMessage, postId }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formState, setFormState] = useState({
    commentId,
    postId,
    message: oldMessage
  })

  const [updateComment] = useMutation(UPDATE_COMMENT_MUTATION, {
    variables: {
      postId,
      commentId,
      message: formState.message
    },
    update: (cache, { data: { updateComment } }) => {
      const data = cache.readQuery({
        query: POSTS_QUERY,
      });
      cache.writeQuery({query: POSTS_QUERY,
        data: {
          posts: [updateComment, ...data.posts]
        }})
    },
    onCompleted: () => setIsEditing(false)
  })

  const handleIsEditing = () => {
    setIsEditing(!isEditing)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateComment()
    setIsEditing(false)
    setFormState({postId: '', message: '', commentId: ''})
  }

  return(
    <>
      {isEditing &&
      <>
          <form className="w-50 bg-white pa1 absolute" onSubmit={handleSubmit}>
          <input
            post={postId}
            type="text"
            className="input-reset ba b--black-20 pa1 mb2 db w-100-i"
            value={formState.message}
            onChange={(e) => setFormState({
              ...formState,
              message: e.target.value
            })}
          />
          <button class="button bottom-0" onClick={handleSubmit}>
            <span className="f6">save</span>
          </button>
          <button className="button" onClick={handleIsEditing}>
            <span className="f6">nope</span>
          </button>
        </form>
      </>
      }
      {!isEditing &&
        <button class="button" onClick={handleIsEditing}>
          <span className="f4">🖉</span>
        </button>
      }
    </>
  )
}

export default UpdateComment
