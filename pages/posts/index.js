import Link from 'next/link'
import React from 'react'

function Posts({ posts }) {
  return (
    <div>
      <h1>Post List</h1>
      {
        posts.map(function (post) {
          return(
            <div key={post.id}>
              <Link href={`/posts/${post.id}`}>
              <div><strong>Title: - </strong> {post.title}</div>
              </Link>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  return {
    props: {
      posts: data.slice(0, 10)
    }
  };
}

export default Posts
