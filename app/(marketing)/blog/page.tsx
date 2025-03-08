import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import React from "react";

const BlogPage = () => {
  const posts = allPosts;
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold test-4xl lg:test-5xl tracking-tight">
            Blog
          </h1>
          <p className="test-muted-foreground text-sm">
            ContentLayerとmdxで書いています
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts.map((post, index) => (
        <article key={index}>
          {post.image && (
            <Image src={post.image} alt={post.title} width={804} height={452} />
          )}
          <h2 className="text-2xl font-extrabold">{post.title}</h2>
          {post.description && (
            <p className="text-muted-foreground">{post.description}</p>
          )}
          {post.date && (
            <p className="text-sm text-muted-foreground">{post.date}</p>
          )}
        </article>
      ))}
    </div>
  );
};

export default BlogPage;
