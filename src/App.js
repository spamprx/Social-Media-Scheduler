import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, AppBar, Toolbar, Typography, Button, TextField, Select, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import theme from './theme';

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
      <Typography variant="h4" gutterBottom>
        Schedule a New Post
      </Typography>
      <TextField
        name="content"
        label="Post Content"
        multiline
        rows={4}
        value={post.content}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
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
        variant="outlined"
      />
      <Select
        name="platform"
        value={post.platform}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      >
        <MenuItem value="Twitter">Twitter</MenuItem>
        <MenuItem value="Facebook">Facebook</MenuItem>
        <MenuItem value="LinkedIn">LinkedIn</MenuItem>
      </Select>
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        size="large"
        style={{ marginTop: '1rem' }}
      >
        Schedule Post
      </Button>
    </form>
  );
}

function PostList({ posts }) {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Scheduled Posts
      </Typography>
      <List>
        {posts.map((post, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={
                <Typography variant="body1" style={{ fontWeight: 500 }}>
                  {post.content}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {`${post.date} - ${post.platform}`}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 700 }}>
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
        <Container style={{ marginTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<PostList posts={posts} />} />
            <Route path="/schedule" element={<PostForm onSubmit={handleSubmit} />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;