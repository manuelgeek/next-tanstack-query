import CreatePost from "@/components/CreatePosts"
import { Posts } from "@/components/Posts"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { getPosts } from "@/helpers/posts"

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1>Create Post</h1> */}
      <CreatePost />
      {/* // Neat! Serialization is now as easy as passing props. //
      HydrationBoundary is a Client Component, so hydration will happen there. */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts />
      </HydrationBoundary>
    </main>
  )
}
