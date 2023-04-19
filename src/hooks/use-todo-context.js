import { useContext } from "react";
import ToDoContext from "../context/todo";

function useTodoContext() {
  return useContext(ToDoContext)
}

export default useTodoContext;