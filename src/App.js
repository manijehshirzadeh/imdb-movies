import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
useEffect (() => {
  getPosts()
  },[])

  const getPosts = async () =>{
    await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    // .then(res=>console.log({res}))
    .then((fetchedposts) => setPosts(fetchedposts))
  }
console.log({posts})
  const listPosts = posts.map(post => <p >{(post)}</p>)
  return (
    <div>
      Hey Manijeh
      {posts.length !== 0  && listPosts}

    </div>
  );
}

export default App;
