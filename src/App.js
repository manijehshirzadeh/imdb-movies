import * as React from 'react';
import { useState, useEffect } from "react";
import "./App.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



function App() {
    const [posts, setPosts] = useState([]);
  
    const getPosts = async () =>{
      await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((fetchedposts) => setPosts(fetchedposts))
      console.log(posts)
    }

    useEffect (() => {
      getPosts()
      },[])
    
  console.log({posts})
  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {posts.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >  
              </Typography>
            
            </React.Fragment>
          }
        />
          {item.title}</ListItem>
      ))}
 </List>
  );
}
  
  export default App


  