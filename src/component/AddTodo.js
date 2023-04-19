import { useState } from "react";
import useTodoContext from "../hooks/use-todo-context";

function AddTodo() {
  const [todo, setTodo] = useState('')
  const { createTodo } = useTodoContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo(todo)
    setTodo('')
  }

  const onChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <div>
      <form className="add-todo" onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="Add a to-do item..."
          onChange={onChange}
        />
        <button >Add</button>
      </form>
    </div>
  );
}

export default AddTodo;