import { allPosts } from 'contentlayer/generated';
import React from 'react'

const BlogPage = () => {
  const posts = allPosts;
  console.log(posts)
  return (
    <div>Blog page</div>
  )
}

export default BlogPage