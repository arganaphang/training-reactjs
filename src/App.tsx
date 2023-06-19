import React from "react";
import Card from "./components/Card";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([
    {
      id: 1,
      title: "First Todo",
      is_done: false,
      created_at: new Date(),
    },
  ]);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="border rounded-md px-12 py-6 w-96 flex flex-col gap-6">
        <div>
          <h1 className="font-semibold text-lg">Todo List</h1>
          <p className="text-gray-500 font-thin">You have {} todo</p>
        </div>
        <form>
          <input
            type="text"
            placeholder="Input your todo here"
            className="w-full border rounded-md px-4 py-2 outline-none border-gray-200"
          />
        </form>
        <ul>
          {todos.map((todo) => (
            <Card key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
