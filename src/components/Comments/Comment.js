import React, { useState } from 'react'
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import { UPDATE_COMMENT_MUTATION } from '../../graphql/mutations/UPDATE_COMMENT_MUTATION';
import { useMutation } from '@apollo/client'

const Comment = ({ commentId, message, postId }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formState, setFormState] = useState({
    commentId,
    postId,
    message: message
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
    setIsEditing(!isEditing)
    setFormState({postId: '', message, commentId: ''})
  }

  return (
    <div>
      <li
        contentEditable={isEditing}
        onDoubleClick={handleIsEditing}
        onInput={(e) =>
            setFormState({
              ...formState,
              message: e.currentTarget.textContent
            })}
        className={`${isEditing ? 'ba b--black-60 pa2' : ''} ma2 lh-copy`}>
        {message}
      </li>

      { isEditing &&
      <div className="ml4">
        <button class="button bottom-0" onClick={handleSubmit}>
          <span className="f6">save</span>
        </button>
        <button className="button" onClick={handleIsEditing}>
          <span className="f6">nope</span>
        </button>
      </div>
      }
    </div>
  )
}

export default Comment
