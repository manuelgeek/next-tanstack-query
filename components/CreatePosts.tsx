"use client"
import { CustomError } from "@/app/types"
import { useMutation } from "@tanstack/react-query"
import { Fragment, useState } from "react"

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [message, setMessage] = useState<null | { id?: number }>()

  const createPost = async (body: {
    id: number
    title: string
    description: string
  }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
    setMessage(await response.json())
  }

  const { isPending, isError, isSuccess, error, mutate } = useMutation({
    mutationFn: createPost,
    retry: 3,
  })

  return (
    <Fragment>
      <div className="post space-y-4 mb-5">
        <h1 className="mb-5">Create a Post</h1>
        <div className="space-x-5">
          <label>Title:</label>
          <input
            className="bg-black border border-white"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-x-5">
          <label>Description:</label>
          <input
            className="bg-black border border-white"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            mutate({ id: Date.now(), title, description })
          }}
          className="bg-blue-600 rounded-md px-6 py-1"
        >
          Create
        </button>
        {isSuccess && <p> Created a new Post ID: {message && message.id}</p>}
        <div style={{ color: "gray", background: "#234" }}>
          {isPending ? "Saving..." : ""}
          {isError ? (error as CustomError).message : ""}
        </div>
      </div>
    </Fragment>
  )
}
