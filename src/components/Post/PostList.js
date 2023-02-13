import Loader from '../UI/Loader/Loader';
import Post from './Post'
import React from 'react'
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import { useQuery } from '@apollo/client'

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

      <Loader loading={loading} data={data} />
    </>
  )
}

export default PostList
