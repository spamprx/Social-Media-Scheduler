import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

function PostList({ posts, onDelete }) {
  return (
    <List>
      {posts.map((post, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={post.content}
            secondary={`${format(new Date(post.date), 'PPpp')} - ${post.platform}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default PostList;