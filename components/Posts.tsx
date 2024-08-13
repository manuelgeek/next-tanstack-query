"use client"

import { useGetPosts } from "@/hooks/useGetPosts"

export const Posts = () => {
  const { posts } = useGetPosts()

  return (
    <>
      <h1>All Posts</h1>
      {posts?.map((post) => {
        return (
          <li className="mt-3 border-b border-blue-500" key={post.id}>
            {post.title}
          </li>
        )
      })}
    </>
  )
}
