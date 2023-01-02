import CommentList from '../Comments/CommentList'
import NewComment from '../Comments/NewComment';
import React from 'react'
import TodoList from '../Todo/TodoList';
import Card from '../UI/Card';
import MoodInput from '../UI/Input/MoodInput';

const Post = ({ post }) => {
  return (
    <Card>
      <strong><p className="f4 underline">{post.title}</p></strong>
      <TodoList items={post.todo} postId={post.id} />
      <MoodInput postId={post.id} myMood={post.mood?.mood} />
      <p>{post.body}</p>
      <CommentList comments={post.comment} />
      <NewComment postId={post.id} />
    </Card>
  )
}

export default Post
