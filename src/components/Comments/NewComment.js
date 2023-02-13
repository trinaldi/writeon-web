import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import { NEW_COMMENT_MUTATION } from '../../graphql/mutations/NEW_COMMENT_MUTATION';
import { PostIdContext } from '../../contexts/postid';

const NewComment = () => {
  const postId = useContext(PostIdContext)

  const [formState, setFormState] = useState({
    postId: '',
    message: ''
  })

  const [newComment] = useMutation(NEW_COMMENT_MUTATION, {
    variables: {
      postId,
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
