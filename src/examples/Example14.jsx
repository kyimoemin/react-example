import React, { useState } from 'react';
import { useQuery } from "react-query";


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
  </div>;
}

function useTodo(todoId) {
  return useQuery({
    queryKey: ["user", todoId],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((response) => response.json() //{throw new Error("testing error")}
    )
  });
}