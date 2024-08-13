import { Post } from "@/app/types"

export const getPosts = async (): Promise<Post[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  return data.json()
}
