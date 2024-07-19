import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleDelete = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" render={() => <Dashboard posts={posts} onDelete={handleDelete} />} />
          <Route path="/schedule" render={() => <Schedule onSubmit={handleSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;