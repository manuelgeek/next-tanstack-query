import { useQuery } from "@tanstack/react-query"
import { getPosts } from "@/helpers/posts"
export const useGetPosts = () => {

  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  })

  return { posts }
}
