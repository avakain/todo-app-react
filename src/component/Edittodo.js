import { useState } from "react";
import useTodoContext from "../hooks/use-todo-context";

function Edittodo({ todo, onEdit }) {
  const [newTodo, setTodo] = useState(todo.toDoName)
  const { editToDo } = useTodoContext();

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSave = () => {
    onEdit()
    editToDo(todo.id, newTodo)
  }

  return (
    <div className="todo-checkbox">
      <input
        type="text"
        id={todo.toDoName}
        name={todo.toDoName}
        value={newTodo}
        onChange={handleChange}
      />
      <button
        onClick={handleSave}
        className="btn-delete">Save</button>
    </div>
  )

}
export default Edittodo;

