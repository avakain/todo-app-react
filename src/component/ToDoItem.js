import useTodoContext from "../hooks/use-todo-context"
import { useState } from "react";
import Edittodo from "./Edittodo";

function ToDoItem({ todo }) {
  const { deleteToDoById, isComplite } = useTodoContext();
  const [showEdit, setShowEdit] = useState(true);

  const handleDelete = () => {
    deleteToDoById(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleChange = (e) => {
    const value = e.target.checked;
    isComplite(todo.id, value)
  }

  return (
    <div className="todo-item">
      {showEdit ?
        <div className="todo-checkbox">
          <h3 htmlFor={todo.toDoName}>{todo.toDoName}</h3>
          <div>
            <label htmlFor={todo.toDoName}>Complited</label>
            <input
              type="checkbox"
              checked={todo.isComplite ? 'checked' : ''}
              id={todo.toDoName}
              name={todo.toDoName}
              value={todo.toDoName}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleDelete} className="btn-delete">Delete</button>
          <button onClick={handleEdit} className="btn-delete">Edit</button>
        </div>
        : <Edittodo todo={todo} onEdit={handleEdit} />}

    </div>

  )
}

export default ToDoItem;
