import React, { useState } from 'react'
import { CREATE_POST_MUTATION } from '../../graphql/mutations/CREATE_POST_MUTATION';
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import { parseDate } from './helpers/parseDate'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [formState, setFormState] = useState({
    title: '',
    body: ''
  })

  const navigate = useNavigate()

  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    variables: {
      title: parseDate(formState.title),
      body: formState.body
    },
    update: (cache, { data: { createPost } }) => {
      const data = cache.readQuery({
        query: POSTS_QUERY,
      });

      cache.writeQuery({query: POSTS_QUERY,
        data: {
          posts: [createPost, ...data.posts]
        }})

    },
    onCompleted: () => navigate('/')
  })

  const handleDate = e => {
    setFormState({
      ...formState,
      title: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        createPost()
        setFormState({title: '', body: ''})
      }}>
        <div className="flex flex-column mt3">
          <input
            className="mb2 w5"
            type="date"
            value={formState.title}
            onChange={handleDate}
          />
          <input
            className="mb2"
            type="text"
            value={formState.body}
            onChange={(e) => setFormState({
              ...formState,
              body: e.target.value
            })}
            placeholder="a body for your post"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
