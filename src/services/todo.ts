import { Todo } from "@/types/todo";
import axios from "axios";

export async function getTodos() {
  const response = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
}
