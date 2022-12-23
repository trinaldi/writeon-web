import CreatePost from './Post/CreatePost';
import Header from './Header';
import PostList from './Post/PostList';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="center w85">
      <Header />
        <Routes>
          <Route path="/" element={<PostList/>} />
          <Route
            path="/create"
            element={<CreatePost/>}
          />
        </Routes>
    </div>
  );
}

export default App;