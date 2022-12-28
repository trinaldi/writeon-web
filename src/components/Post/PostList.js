import React from 'react'
import Post from './Post'
import { useQuery } from '@apollo/client'
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';

const PostList = () => {
  const { data, loading } = useQuery(POSTS_QUERY)

  return (
    <>
      { !loading && data && (
        <section>
          {data.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      ) }
    </>
  )
}

export default PostList
