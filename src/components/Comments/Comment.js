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
    setIsEditing(false)
    setFormState({postId: '', message, commentId: ''})
  }

  return (
    <li
      onBlur={handleSubmit}
      contentEditable={isEditing}
      onClick={handleIsEditing}
      onInput={(e) =>
          setFormState({
            ...formState,
            message: e.currentTarget.textContent
          })}
      className={`${isEditing ? 'bb b--black-40' : ''} ml4 mv1 lh-copy`}> ⤷ {message}
      { isEditing &&
        <>
          <button class="button bottom-0" onClick={handleSubmit}>
            <span className="f6">save</span>
          </button>
          <button className="button" onClick={handleIsEditing}>
            <span className="f6">nope</span>
          </button>
        </>
      }
    </li>
  )
}

export default Comment
