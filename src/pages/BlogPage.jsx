import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import PostCard from '../components/PostCard'
const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  },[])


  const postCard = posts.map(
    (post) => {
      return (
        <li key={post.id}>
          <PostCard post={post} ></PostCard>
        </li>
      )
    }
  )
  

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>BlogPage</div>
      <section>
        <h2>blog</h2>
        
        <ul>{postCard}</ul>
      </section>
    </>
  )

}

export default BlogPage