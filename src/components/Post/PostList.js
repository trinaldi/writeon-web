import React from 'react'
import Post from './Post'
import { useQuery, gql } from '@apollo/client'

export const POSTS_QUERY = gql`
 {
   posts {
     id
     body
     title
     comment {
       id
       name
       message
     }
     todo {
       id
       done
       task
     }
   }
 }
`

const PostList = () => {
  const { data, loading } = useQuery(POSTS_QUERY)

  return (
    <div>
      { !loading && data && (
        <>
          {data.posts.map((post) => (
              <Post key={post.id} post={post} />
          ))}
        </>
      ) }
    </div>
  )
}

export default PostList
