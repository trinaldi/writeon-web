import Card from '../UI/Display/Card';
import CommentList from '../Comments/CommentList'
import MoodPanel from '../Mood/MoodPanel';
import NewComment from '../Comments/NewComment';
import React from 'react'
import TodoList from '../Todo/TodoList';
import { PostIdContext } from '../../contexts/postid';

const Post = ({ post }) => {

  return (
    <PostIdContext.Provider value={post.id}>
      <Card>
        <strong><p className="f4 underline">{post.title}</p></strong>
        <TodoList items={post.todo} />
        <MoodPanel myMood={post.mood?.mood} />
        <p className="b f4 mt4">{post.body}</p>
        <CommentList comments={post.comment} />
        <NewComment />
      </Card>
    </PostIdContext.Provider>
  )
}

export default Post
