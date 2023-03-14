import { useState, useEffect } from "react";
import "./App.css";

// function App() {
//   const [posts, setPosts] = useState([]);
// useEffect (() => {
//   getPosts()
//   },[])

//   const getPosts = async () =>{
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     // .then(res=>console.log({res}))
//     .then((fetchedposts) => setPosts(fetchedposts))
//   }
// console.log({posts})
//   const listPosts = posts.map(post => <p >{(post)}</p>)
//   return (
//     <div>
//       Hey Manijeh
//       {posts.length !== 0  && listPosts}

//     </div>
//   );
// }

// export default App;



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
    <div>
      {posts.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
  
  export default App



// function Products() {

//   const [products, setProducts] = useState({});
  
//   const fetchProducts = async () => {
//   const {data} = await Axios.get('https://api.test.ts/demo/test');  
//   const products= data
//   setProducts(products);
//   };
  
//   useEffect(() => {
  
//     fetchProducts()
  
//    }, []);
  
//    return(
       
//        <div>
//            Want to Display list of products from API
//        </div>
//    )
  
//   }
  
//   export default Products;