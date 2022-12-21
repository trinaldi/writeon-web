import React from 'react'
import PostList from './PostList';
import CreatePost from './CreatePost';
import Header from './Header';
import '../styles/App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<PostList/>} />
          <Route
            path="/create"
            element={<CreatePost/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
