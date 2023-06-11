import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from "react-query";


export function Example14() {
  const [todoId, setTodoId] = useState(1);
  const { data, isLoading, error } = useTodo(todoId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error?.message}</p>;

  return <div>
    <input type="number" value={todoId} onChange={e => setTodoId(Number(e.target.value))} />
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    <AddPost />
  </div>;
}

function AddPost() {

  const { register, handleSubmit, reset } = useForm();
  const { mutate, isSuccess, error } = useAddTodo();
  const client = useQueryClient();

  function submit(data) {
    mutate({ ...data, userId: 1 }, {
      onSuccess(data) {
        reset();
        client.invalidateQueries(["posts"]);
      }
    });
  }


  if (isSuccess) return <p>Post added successfully</p>;
  if (error) return <p>{error?.message || "Something went wrong"}</p>;

  return <form onSubmit={handleSubmit(submit)} >
    <input {...register("title")} placeholder='title' />
    <input {...register("body")} placeholder='body' />
    <input type="submit" />
  </form>;
}

function useTodo(todoId) {
  return useQuery({
    queryKey: ["posts", todoId],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts/${todoId}`).then((response) => response.json() //{throw new Error("testing error")}
    )
  });
}

function useAddTodo() {
  return useMutation({
    mutationFn: (data) => fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
  });
}