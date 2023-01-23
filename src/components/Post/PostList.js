import React from 'react'
import Post from './Post'
import { useQuery } from '@apollo/client'
import { POSTS_QUERY } from '../../graphql/queries/POSTS_QUERY';
import Loader from '../UI/Loader/Loader';

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
