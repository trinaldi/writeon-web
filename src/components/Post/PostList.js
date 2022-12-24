import React from 'react'
import Post from './Post'
import { useQuery } from '@apollo/client'
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';

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
