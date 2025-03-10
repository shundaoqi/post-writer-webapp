import React from "react";
import { allPosts } from "contentlayer/generated";


const getPostFromSlug = async (slug: string) => {
  const post = allPosts.find((post) => post.slug === slug)

  return post
}

const Postpage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = getPostFromSlug(slug)

  if (!post) {
    notFound()
  }

  return <div>{slug}</div>;
};

export default Postpage;
