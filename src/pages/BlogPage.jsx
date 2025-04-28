import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import PostCard from '../components/PostCard'
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false)

  const getPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log(data);
      setPosts(data);
      setError(false)
    } catch(e) {
      setError(true);

    }
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
        

        {
          error ? (
            <h2>Algo salió mal</h2>
          ) :

          postCard.length ?
          <ul>{postCard}</ul> :
          <h2>Loading...</h2>

        }
      </section>
    </>
  )

}

export default BlogPage