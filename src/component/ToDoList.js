import ToDoItem from './ToDoItem'
import useTodoContext from '../hooks/use-todo-context';
import { useState } from 'react';

function ToDoList() {
  const [checked, setChecker] = useState(false)
  const { todos } = useTodoContext();

  const renderUnfinishedTasks = todos.map((todo) => {
    if (!todo.isComplite) {
      return <ToDoItem todo={todo} key={todo.id} />
    };
  });

  const renderAllTodoItems = todos.map((todo) => {
    return <ToDoItem todo={todo} key={todo.id} />
  });

  const handleChange = () => {
    setChecker(!checked);
  }

  return (
    <div >
      <div className="todo-item">{checked ? renderUnfinishedTasks : renderAllTodoItems}</div>
      <div>
        Hide completed tasks
        <input onChange={handleChange} type="checkbox" />
      </div>
    </div >
  )
}

export default ToDoList;