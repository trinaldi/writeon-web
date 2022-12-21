import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { POSTS_QUERY } from './PostList';

const CREATE_POST_MUTATION = gql`
  mutation($title: String!, $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      post {
        id
        title
        body
      }
    }
  }
`
const CreatePost = () => {
  const [formState, setFormState] = useState({
    title: '',
    body: ''
  })

  const navigate = useNavigate()

  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    variables: {
      title: formState.title,
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

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        createPost()
        setFormState({title: '', body: ''})
      }}>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            type="text"
            value={formState.title}
            onChange={(e) => setFormState({
              ...formState,
              title: e.target.value
            })}
            placeholder="a title for the post"
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
