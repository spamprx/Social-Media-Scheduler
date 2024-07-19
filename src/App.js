import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, TextField, Select, MenuItem, List, ListItem, ListItemText } from '@mui/material';

function PostForm({ onSubmit }) {
  const [post, setPost] = useState({ content: '', date: '', platform: 'Twitter' });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({ content: '', date: '', platform: 'Twitter' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="content"
        label="Post Content"
        multiline
        rows={4}
        value={post.content}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="date"
        label="Schedule Date"
        type="datetime-local"
        value={post.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Select
        name="platform"
        value={post.platform}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="Twitter">Twitter</MenuItem>
        <MenuItem value="Facebook">Facebook</MenuItem>
        <MenuItem value="LinkedIn">LinkedIn</MenuItem>
      </Select>
      <Button type="submit" variant="contained" color="primary">
        Schedule Post
      </Button>
    </form>
  );
}

function PostList({ posts }) {
  return (
    <List>
      {posts.map((post, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={post.content}
            secondary={`${post.date} - ${post.platform}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

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

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Social Media Scheduler
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/schedule">
            Schedule Post
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path="/schedule" element={<PostForm onSubmit={handleSubmit} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;