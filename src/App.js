import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ content: '', date: '', platform: 'Twitter' });

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ content: '', date: '', platform: 'Twitter' });
  };

  return (
    <div className="App">
      <h1>Social Media Post Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
          placeholder="Post content"
          required
        />
        <input
          type="datetime-local"
          name="date"
          value={newPost.date}
          onChange={handleInputChange}
          required
        />
        <select
          name="platform"
          value={newPost.platform}
          onChange={handleInputChange}
        >
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
        <button type="submit">Schedule Post</button>
      </form>
      <h2>Scheduled Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.content} - {post.date} ({post.platform})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;