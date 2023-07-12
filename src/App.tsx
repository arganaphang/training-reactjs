import React from "react";
import Card from "./components/Card";
import Spinner from "./components/Spinner";
import { Todo } from "./types/todo";
import axios from "axios";

function App() {
  const [title, setTitle] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((e) => {
        setIsError(true);
        console.log(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const addTodo = (title: string) => {
    console.log("Add", title);
  };
  const toggleTodo = (id: number) => {
    console.log("Toggle", id);
  };
  const deleteTodo = (id: number) => {
    console.log("Delete", id);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="border rounded-md px-12 py-6 w-96 h-96 flex flex-col gap-6">
        <div>
          <h1 className="font-semibold text-lg">Todo List</h1>
          <p className="text-gray-500 font-thin">
            You have {todos.length} todo
          </p>
        </div>
        <form
          onSubmit={(e) => {
            // disable form submit/redirect/reload
            e.preventDefault();
            // Trim title and Validate
            if (!title.trim()) {
              return;
            }
            // Trim title then add to todo
            addTodo(title.trim());
            setTitle("");
          }}
        >
          <input
            type="text"
            placeholder="Input your todo here"
            className="w-full border rounded-md px-4 py-2 outline-none border-gray-200"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </form>
        <ul className="flex-1 overflow-auto">
          {isLoading ? (
            <Spinner />
          ) : (
            todos.map((todo) => (
              <Card
                key={todo.id}
                {...todo}
                onToggleTodo={toggleTodo}
                onDeleteTodo={deleteTodo}
              />
            ))
          )}

          {!isLoading && isError ? <p>Error Get Todos</p> : null}
        </ul>
      </div>
    </div>
  );
}
export default App;
