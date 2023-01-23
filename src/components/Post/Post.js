import Card from '../UI/Display/Card';
import CommentList from '../Comments/CommentList'
import MoodPanel from '../Mood/MoodPanel';
import NewComment from '../Comments/NewComment';
import React from 'react'
import TodoList from '../Todo/TodoList';

const Post = ({ post }) => {
  return (
    <Card>
      <strong><p className="f4 underline">{post.title}</p></strong>
      <TodoList items={post.todo} postId={post.id} />
      <MoodPanel postId={post.id} myMood={post.mood?.mood} />
      <p className="b f4 mt4">{post.body}</p>
      <CommentList postId={post.id} comments={post.comment} />
      <NewComment postId={post.id} />
    </Card>
  )
}

export default Post
