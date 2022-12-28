import CreatePost from './Post/CreatePost';
import Header from './UI/Header';
import PostList from './Post/PostList';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="center w85">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PostList/>} />
          <Route
            path="/create"
            element={<CreatePost/>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
