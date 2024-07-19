import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

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
      <FormControl fullWidth margin="normal">
        <InputLabel>Platform</InputLabel>
        <Select
          name="platform"
          value={post.platform}
          onChange={handleChange}
        >
          <MenuItem value="Twitter">Twitter</MenuItem>
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="LinkedIn">LinkedIn</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Schedule Post
      </Button>
    </form>
  );
}

export default PostForm;