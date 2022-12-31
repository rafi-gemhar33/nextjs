import { useRouter } from 'next/router';
import React from 'react'


function Post({ post }) {

  const router = useRouter()

  // if(router.isFallback){
  //   return (<div>Loading...</div>)
  // }

  return (
    <div>
      <h1>Post List</h1>
      <div><strong>Title: - </strong> {post.title}</div>
      <body>
        <div>
          {post.body}
        </div>
      </body>
    </div>
  )
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  const paths = data.slice(0, 10).map(post => {
    return {
      params: { postId: `${post.id}` }
    }
  })

  return { paths, fallback: "blocking" }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json()

  console.log(data);
  return {
    props: {
      post: data
    }
  };
}

export default Post
